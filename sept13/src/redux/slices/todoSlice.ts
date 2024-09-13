import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
}

const initialState: Todo[] = []

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload)
    },
    deleteTodo: (state, action: PayloadAction<{ id: string }>) => {
      state.map(todo => {
        if (todo.id === action.payload.id) {
          const index = state.indexOf(todo)
          state.splice(index, 1)
        }
      })
    },
    updateTodo: (state, action: PayloadAction<{ id: string }>) => {
      state.map(todo => {
        if (todo.id === action.payload.id) {
          todo.isCompleted = !todo.isCompleted
        }
      })
    }
  }
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions

export default todoSlice