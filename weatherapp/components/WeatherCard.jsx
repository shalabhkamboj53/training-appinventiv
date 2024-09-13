import React, { useEffect, useState } from 'react'

const WeatherCard = ({weather, location}) => {
  const [Weatherimage, setWeatherimage] = useState('')

  useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos?client_id=rxWwwVSsaSwk3pPbP4V-NLceoug7Am2hMFSytw3DeHs&page=1&query=${weather.weather[0].description.replace(/ /g,'')}&per_page=1&orientation=landscape`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      
      setWeatherimage(data.results[0].urls.regular)
    })
  }, [weather])
  
  return (
    <div className="card bg-base-100 w-96 shadow-xl my-5">
      <figure>
        <img
          src={Weatherimage}
          alt={weather.weather[0].description} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Location: {location}
          <div className="badge badge-accent">Today</div>
        </h2>
        <div className="card-actions">
          <div className="badge badge-outline py-4 px-3">Weather: {weather.weather[0].description}</div>
          <div className="badge badge-outline py-4 px-2">Temperature: {weather.main.temp/10}° C </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard