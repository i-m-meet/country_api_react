import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SelectMenu from "./components/SelectMenu";
import "./App.css"
import CountryCard from "./components/CountryCard";
import CountriesContainer from "./components/CountriesList";
import CountriesList from "./components/CountriesList";
import { useState } from "react";

const App = () => {

    const [query, setQuery] = useState('')
    return(
        <>
        <Header/>
        <main>
        <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
       <SelectMenu/>
        </div>
        <div className="country-container">
            <CountriesList query={query}/>
        </div>
        </main>
        </>
    );
};

export default App;
