import React, { useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { locationSlice } from '@/redux/slice/location'
import { weatherSlice } from '@/redux/slice/weather'

// https://api.openweathermap.org/data/2.5/weather?q=London&appid=3045dd712ffe6e702e3245525ac7fa38

const Navbar = () => {
    const [LocalLocation, setLocalLocation] = useState('')
    const locationSearchBox = useRef('')

    // Redux
    const location = useSelector((state) => state.location.value)
    const dispatch = useDispatch()
    
    const search = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${LocalLocation}&appid=3045dd712ffe6e702e3245525ac7fa38`)
        .then(response => response.json())
        .then(data => {
           if(data.cod !== '404'){ 
                dispatch(locationSlice.actions.setlocation(data.name))
                dispatch(weatherSlice.actions.setweather(data))
           } else {
                alert('Invalid Location')
           }
        })
        .catch(error => {
            alert('Invalid Location')
        })
    }

  return (
    <div className="navbar bg-base-300">
        <div className="flex-1">
            <a className="btn btn-ghost text-xl">WeatherBuddy</a>
        </div>
        <div className='flex-1 text-center'>
            <label htmlFor={locationSearchBox}>
                <i className="bi bi-geo-alt me-3"></i> {location}
                
            </label>
        </div>
        <div className="flex-none gap-2">
            <div className="">
                <input type="text" id={locationSearchBox} placeholder="Location" className="input input-bordered w-24 md:w-auto me-4" value={LocalLocation} onChange={(e)=>{setLocalLocation(e.target.value)}} />
                <button className='btn btn-accent' onClick={search}>Search</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar