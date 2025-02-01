import React from 'react';
// import Header from "./components/Header";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import "../App.css"
import CountriesList from "./CountriesList";
import { useState } from "react";
import { useOutletContext } from 'react-router';

export default function Home() {

    const [query, setQuery] = useState('');
    const [isDark]= useOutletContext()

  return (
    <main className={`${isDark? "dark" : ""}`}>
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
