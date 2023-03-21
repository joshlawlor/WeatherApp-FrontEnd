import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, Navbar, Container } from 'react-bootstrap';


import SearchForm from './components/Forms/SearchForm';

function App() {
  return (
    <div className="App">
       <Navbar sticky='top' collapseOnSelect expand='lg' bg='dark' variant='dark'>
    
    <Container>
      
      <Navbar.Brand href='/posts'> Weather App</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='me-auto'>
     
        </Nav>
     
      </Navbar.Collapse>
      
    </Container>
    
  </Navbar>

	<main>
    <SearchForm/>

		<section class="weather-info">
      
			<div class="location">
				<h2>Your Current Location:</h2>
				<p class="city"></p>
				<p class="country"></p>
			</div>
			<div class="temperature">
				<h2>Current Temperature:</h2>
				<p class="temp"></p>
			</div>
			<div class="description">
				<h2>Weather Description:</h2>
				<p class="desc"></p>
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
