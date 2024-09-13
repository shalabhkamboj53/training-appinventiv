import { configureStore } from '@reduxjs/toolkit'
import { locationSlice } from './slice/location'
import { weatherSlice } from './slice/weather'

export const store = configureStore({
  reducer: {
    location: locationSlice.reducer,
    weather: weatherSlice.reducer,
  },
})