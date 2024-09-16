import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../utils/types';

export const useAppDispatch = useDispatch<AppDispatch>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const userDataSelect = (state: RootState) => state.userData.data;

export const todosSelect = (state: RootState) => state.todos;