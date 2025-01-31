import React, { useEffect, useState } from "react";
// import countriesData from '../countriesData';
import CountryListShimmer from "./CountriesListShimmer";
import CountryCard from "./CountryCard";

export default function CountriesList({ query }) {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, []);

  const array = countriesData
    .filter((country) => country.name.common.toLowerCase().includes(query))
    .map((country) => {
      return (
        <CountryCard
          key={country.name.common}
          name={country.name.common}
          capital={country.capital}
          flag={country.flags.svg}
          population={country.population}
          region={country.region}
        />
      );
    });

  return <> 
  {countriesData.length ===0? <CountryListShimmer/> :
  <div className="countries-container">{array}</div>}
  </>;
}
