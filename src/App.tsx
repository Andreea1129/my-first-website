import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';

import viteLogo from '/vite.svg';
import './App.css'

// import backend from './backend'
function App()  {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("blue");

  const array = ["red","yellow","orange"];
  const [index, setIndex] = useState(0);
  const [color_array,setColor_array] = useState(array[0]);

  const random = ["purple", "blue", "green", "yellow", "red"];
  const [color_random,setColor_random] = useState(random[0]);

  const [city,setCity] = useState("");
  const [region,setRegion] = useState("");
  const [country,setCountry] = useState("");
  const [lat,setLat] = useState("");
  const [lon,setLon] = useState("");

  const [catImages, setCatImages] = useState([]);

  const handleClick =() =>{
    if(color=="blue") setColor("green");
      else setColor("blue");
  };

  const handleArray =() =>{
    var nextIndex=index+1;
    if(nextIndex>=array.length)
        nextIndex=0;
    setIndex(nextIndex);
    setColor_array(array[nextIndex]);
  };

  const handleRandom =() =>{
    var randomIndex=Math.floor(Math.random()*random.length);
    setColor_random(random[randomIndex]);
  };
  const handleLocation =() =>{
    fetch("api/location")
    // backend.locationIP() response.json()
   // fetch("http://ip-api.com/json/")
    //backend.locationIP() =>{}
    // let user = Object.assign({}, JSON.parse(backendMethod.locationIP()));
    //     setCity(user.city);
    //     setRegion(user.region);
    //     setCountry(user.country);
    //     setLat(user.lat);
    //     setLon(user.lon);
    //     console.log(user);
    .then((response) => response.json())
    .then((data) => {
        setCity(data.city);
        setRegion(data.region);
        setCountry(data.country);
        setLat(data.lat);
        setLon(data.lon);
        console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
     handleLocation();
  },[]);

  
  const handleCat =() =>{
    fetch("https://api.thecatapi.com/v1/images/search?limit=4", {
      headers: {
        "x-api-key": "live_Ni6tJHBlDRMADteQrXQYHWiiUW9W8B3KFvTY7jTd4yGp2hL3dFRmviN0IyTqvy7k"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        const imageUrl = data.map((cat: { url: string }) => cat.url);
        setCatImages(imageUrl);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() =>{
    handleCat();
  },[]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Andreea</h1>

      <h2>Cats</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {catImages.length > 0 && catImages.map((url, index) => (
        <img key={index} src={url} alt="A random cat" width="200" style={{ margin: '10px' }} />
      ))}
      </div>
      <h2>Location</h2>
      <p>City: {city}</p>
      <p>Region: {region}</p>
      <p>Country: {country}</p>
      <p>Latitude: {lat}</p>
      <p>Longitude: {lon}</p>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <button 
        onClick={handleClick}
        style={{backgroundColor: color}}
        >
        Click me to turn green
        </button>

        <button 
        onClick={handleArray}
        style={{backgroundColor: color_array}}
        >
        Click me to change color
        </button>

        <button 
        onClick={handleRandom}
        style={{backgroundColor: color_random}}
        >
        Click me to change color random
        </button>


        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
