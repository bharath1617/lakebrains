
import React from 'react';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './App.css';

function App() {
  
  const [data, setData] = useState(null);
  const [cityName, setCityName] = useState('');
  const [loading, setLoading] = useState(true);
  const handlesearch = async () => {
    try {
      if (cityName) {
        const apiKey = "840de593b7028de6e424162454790fe5";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

        const response = await fetch(apiUrl);
        const datas = await response.json();
        setData(datas);
        console.log(datas);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleclose = () =>{
      setLoading(true);
      setData(null);
  }

  return (
    <div className="App">
      {loading ? <div className='searchbar'> <input type='text' placeholder='type to search...'
        onChange={(e) => setCityName(e.target.value)} />
        <button onClick={handlesearch} ><FaSearch /></button>
      </div> :
        <div>
          {data &&
            <div className="overlay">
              <h1>Weather App</h1>
              <p>Name: {data.name}</p>
              <p>Temperature: {data.main.temp}°C</p>
              <p>
                Main: {data.weather[0].main} - {data.weather[0].description}
              </p>
              <button onClick={handleclose}>Close</button>
            </div>}
        </div>
      }
    </div>
  );
}

export default App;
