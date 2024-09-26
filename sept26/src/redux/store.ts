import { configureStore } from '@reduxjs/toolkit';
import globalSlice from './slices/globalSlice';
import todoSlice from './slices/todoSlice';

export const store = configureStore({
    reducer: {
        userData: globalSlice.reducer,
        todos: todoSlice.reducer,
    },
});



