import React from 'react';
// import Header from "./components/Header";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import "../App.css"
import CountriesList from "./CountriesList";
import { useState } from "react";

export default function () {

    const [query, setQuery] = useState('');

  return (
    <main>
        <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
       <SelectMenu/>
        </div>
        <div className="country-container">
            <CountriesList query={query}/>
        </div>
        </main>
  );
}
