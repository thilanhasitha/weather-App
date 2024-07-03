import React, { useEffect, useState } from "react";
import axios from 'axios'
import search from "../src/assets/search.jpg";
import weather from '../src/assets/weather.jpg'
import huminity from '../src/assets/huminity.jpg'
import wind from '../src/assets/wind.jpg'
import "./Home.css";

const Home = () => {
  const [data,setData] = useState({
    celcius:10,
    name:'London',
    humidity:'20%',
    speed:30,
})
const [name,setName] = useState('')

  
  const handleClick = ()=>{
    if(name!==""){
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=4aaac696aaf8c2e321e97b0d0e223c9f`;
  axios.get(apiUrl)
  .then(res=>{
    console.log(res.data);
    setData({...data,celcius:res.data.main.temp,
      name:res.data.name,
      humidity:res.data.main.humidity,
      speed:res.data.wind.speed,
    })
  }
   )
  .catch(err=>console.log('err'));


    }
  }


  return (
    <div className="container">
      <div className="weather">
        <div className="search">
          <input type="text" placeholder="Enter city Name" onChange={e=>setName(e.target.value)}/>
          <button>
            <img src={""} at="search" onClick={handleClick}/>
          </button>
        </div>
        <div className="weatherinfo">
          <img className='weatherpic'src={weather} alt="" />
          <div className="default">
          <h1>{data.celcius}°c</h1>
          <h2>{data.name}</h2>

          <div className="info">
            <div className="col1">
              <img className='humidity'src={huminity}alt=""/>
              <div className="content1">
                <p>{data.humidity}</p>
                <p>Humidity</p>
              </div>

            </div>
            <div className="col2">
              <img className ='wind'src={wind}alt=""/>
              <div  className="content2">
                <p>{data.speed} Km/h</p>
                <p>Wind</p>
              </div>

            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
