import React, {useState} from 'react';
import WeatherFetch from './weatherFetch.js'
import './App.css';
import Login from './Containers/Login.jsx';
import keys from "./Keys";
const api ={
  key: "0364c57b9c18f93b459268621da06e3e",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
    const [query, setQuery]= useState("")
    const [weather, setWeather]=useState("")

    const search = evt =>{
      if (evt.key === "Enter"){
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result =>{
          setWeather(result);
          setQuery("");
          console.log(result);
        });
      }
    }
    const dateBuilder=(d)=>{
      let months = ["January", "Feburary", "March", "April", "May", "June",
      "July", "August", "September", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

      let day = days[d.getDay()];
      let date= d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();

      return `${day} ${date} ${month} ${year}`
    }
    return(
      <div className="app">
        <main>
          <div className="search-box">
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
              onChange={e =>setQuery(e.target.value)}
              value={query}
              onKeyPress={search}  />
          </div>
          {(typeof weather.main != "undefined") ? (
          <div>
          <div className="location-box">
            {weather.name}, {weather.sys.country}
          </div>
          <div className="date">{dateBuilder(new Date())}</div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°C
            </div>
            <div className="weather">
             {weather.weather[0].main}
            </div>
          </div>
          </div>
      ) :("")}
        </main>
        <WeatherFetch/>
      </div>
    )
}

export default App;
