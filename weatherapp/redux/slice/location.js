import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'Set Location',
}

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setlocation: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) =>{
    builder
    .addCase(_,(state, action)=>{
      
    })
  }
})

