import './App.css';
import {React, useState}from 'react';
import { Route, Routes } from 'react-router-dom';

//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, Navbar, Container } from 'react-bootstrap';


import SearchForm from './components/Forms/SearchForm';
const backendURL = 'http://localhost:4000/'

function App() {

  const [userSearch, SetUserSearch] = useState({})

  function handleChange(event) {
    console.log(event.target.value)

    SetUserSearch({...userSearch, [event.target.id] : event.target.value})
  }

  const [weather, setWeather] = useState(
    {
      City: '', 
      Country: '',
      Temperature: '',
      Description: '',
      TimeZone: ''
    })



  async function getWeather(e) {
    e.preventDefault()
    await fetch(
        `${backendURL}search`,
        {
        method: "POST",
        body: JSON.stringify(userSearch),
        headers: new Headers({ 'content-type': 'application/json' })
      })
    .then(response => {
        if (response.ok)
            return response.json();
    })
    .then(response => {
      const today =  new Date()
      const time = today.getHours()+ ":0" +  today.getMinutes() + ":" + today.getSeconds()

      console.log( time)
      setWeather(prevState => ({
        ...prevState,
        City: response.name,
        Temperature: response.main.temp,
        Country: response.sys.country,
        TimeZone: time,
        Description: response.weather[0].description
      }))

       
    })
  }



  return (
    <div className="App">
       {/* <Navbar sticky='top' collapseOnSelect expand='lg' bg='dark' variant='dark'>
    
    <Container>
      
      <Navbar.Brand href='/posts'> Weather App</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='me-auto'>
     
        </Nav>
     
      </Navbar.Collapse>
      
    </Container>
    
  </Navbar> */}

	<main>
  <section className="searchbar">
      <form  onChange={handleChange}  className="search-form">
        <input  id="city" placeholder="Enter city name" />
        <button onClick={getWeather} type="submit">Search</button>
      </form>
    </section>

		<section className="weather-info">
      
			<div className="location">
				<h2>{weather.City}, {weather.Country} </h2>
        
			</div>
			<div className="temperature">
				<h2>Current Temperature: {<br></br>}{weather.Temperature}</h2>
			</div>
      <div className="time">
				<h2>Time: <br></br> {weather.TimeZone}</h2>
			</div>
			<div className="description">
				<h2>Weather Description: <br></br> {weather.Description.toUpperCase()}</h2>
			</div>
		</section>
	</main>
  <footer>
		<p>Powered by <a href="https://openweathermap.org/">OpenWeatherMap</a></p>
	</footer>
	<script src="script.js"></script>
    </div>
  );
}

export default App;
