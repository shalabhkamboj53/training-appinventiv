import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null,
}

export const weatherSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setweather: (state, action) => {
      state.value = action.payload
    },
  },
})