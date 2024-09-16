import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit';
import { initialStateType } from '../../utils/types';

const initialState : initialStateType = {
  data: {name: '', Company: '', username: ''},
  error: null,
  loading: false
}

const globalSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    }
  },
  extraReducers(builder) {
    builder.addCase('fetchData/pending', (state) => {
      state.loading = true;
    });
    builder.addCase('fetchData/fulfilled', (state) => {
      state.loading = false;
    });
    builder.addCase('fetchData/rejected', (state) => {
      state.loading = false;
    });
  },
});

export const { setData, setError } = globalSlice.actions;

export const fetchData = createAsyncThunk(
  'fetchData',
  async (_, {dispatch}) => {
    try {
      const response = await fetch((import.meta as any).env.VITE_USER_DATA_API as string);
      console.log("response ", response);
      const data = await response.json();
      console.log("response.json(): ", data);
      
      dispatch(setData(data));      
    } catch (error) {
      dispatch(setError(error));
    }
  }
);

export default globalSlice
