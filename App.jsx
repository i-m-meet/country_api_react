import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SelectMenu from "./components/SelectMenu";
import "./App.css"
import CountryCard from "./components/CountryCard";
import CountriesContainer from "./components/CountriesList";

const App = () => {
    return(
        <>
        <Header/>
        <main>
        <div className="search-filter-container">
        <SearchBar/>
       <SelectMenu/>
        </div>
        <div className="country-container">
            <CountriesContainer/>
        </div>
        </main>
        </>
    );
};

export default App;
