import { configureStore } from '@reduxjs/toolkit';
import globalSlice from './slices/globalSlice';
import todoSlice from './slices/todoSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
    reducer: {
        userData: globalSlice.reducer,
        todos: todoSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch<AppDispatch>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const userDataSelect = (state: RootState) => state.userData.data;

export const todosSelect = (state: RootState) => state.todos;