import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit';

type initialStateType = {
  data?: {
    name: string,
    Company: string,
    username: string
  },
  error: any,
  loading: boolean
}

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
      console.log('fetching API');
      const response = await fetch('https://run.mocky.io/v3/1a05c1d6-ec4c-4c8f-bf80-ddf9abd8d45e');
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
