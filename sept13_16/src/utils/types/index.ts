import { store } from "../../redux/store";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type initialStateType = {
    data?: {
      name: string,
      Company: string,
      username: string
    },
    error: any,
    loading: boolean
}

export interface Todo {
    id: string;
    title: string;
    isCompleted: boolean;
}