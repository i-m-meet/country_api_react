import React from 'react';
import countriesData from '../countriesData';
import CountryCard from './CountryCard';

export default function CountriesList() 

{
const array= countriesData.map((country)=>{
  console.log(country)
  return <CountryCard name={country.name.common} capital={country.capital} 
  flag={country.flags.svg} population={country.population} region={country.region}/>
})

  return (
    <div className="countries-container">
   {array}
    </div>
  );
}
