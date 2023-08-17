import React, {useState} from 'react'
import './app.css'

function App() {

    const apiKey = '4f25502ce67ce21c020ffe855e56ed5b'
    const [weatherData, setWeatherData] = useState([{}])
    const [city, setCity] = useState("")

    const getWeather = (event) => {
        if (event.key == "Enter") {
            fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}').then(
                response => response.json()
                .then(
                    data => {
                        setWeatherData(data)
                        setCity("")

                    }
                )
            )
         }
    }
    return(
        <div className="container">
         <input 
         className="input" 
         placeholder="Enter City..."
         onChange={e => setCity(e.target.value)}
         value={city}
         onKeyPress={getWeather}   
                      
            />

            <div>
            {typeof weatherData.main == 'undefined' ? (
                <div> 
                    <p>
                        Welcome to Weather App! Enter a city to get the weather of.
                    </p>
                </div>
            ): (
                <div className='weather-data'>
                    <p className='city'>{weatherData.name} </p>
                    <p className='temp'>{Math.round(weatherData.main.temp)} °F </p>
                    <p className='weather'>{weatherData.weather[0].main} </p>  
            )

        </div>
    )}

      {weatherData.cod === "404" ? (
        <p>City Not Found!</p>
      ) : (
        <></>
      )}

</div>
export default App </div>
)}