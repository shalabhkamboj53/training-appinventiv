import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { locationSlice } from '@/redux/slice/location'
import WeatherCard from './WeatherCard'

const WeatherCards = () => {
  const location = useSelector((state) => state.location.value)
  const weather = useSelector((state) => state.weather.value)

  const dispatch = useDispatch()

  return (
    <div className='py-10 flex justify-center'>
      {
        weather == null || weather.cod==404 ? <h1 className='text-2xl'>No Weather Data</h1> : (
          <WeatherCard location={location} weather={weather} />
        )
      }
    </div>
  )
}

export default WeatherCards