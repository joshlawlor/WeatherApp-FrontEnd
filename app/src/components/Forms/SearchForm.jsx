import React from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = ({backendURL}) => {
    
 async function getWeather(e) {
    e.preventDefault()
    console.log('RAN')
    await fetch(
        `${backendURL}search`,
        {
        method: "GET",
        headers: new Headers({ 'content-type': 'application/json' })
      })
    .then(response => {
        if (response.ok)
            return response.json();
    })
    .then(response => {
        console.log(response.name)
    })
  }

  return (
    <section className="searchbar">
      <form className="search-form">
        <input type="text" placeholder="Enter city name" />
        <button onClick={getWeather} type="submit">Search</button>
      </form>
    </section>
  );
};

export default SearchForm;
