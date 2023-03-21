import React from "react";
import { useNavigate } from "react-router-dom";


const SearchForm = () => {


    return(
        <section class="searchbar">
        <form class="search-form">
                <input type="text" placeholder="Enter city name"/>
                <button type="submit">Search</button>
            </form>
        </section>
    )
}



export default SearchForm