import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
  <header>
		<h1>Weather App</h1>
		<form class="search-form">
			<input type="text" placeholder="Enter city name"/>
			<button type="submit">Search</button>
		</form>
	</header>
	<main>
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
