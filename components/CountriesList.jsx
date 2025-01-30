import React from 'react';
import countriesData from '../countriesData';
import CountryCard from './CountryCard';

export default function CountriesList({query}) 

{
const array= countriesData.filter((country) =>
country.name.common.toLowerCase().includes(query)).map((country)=>{
  console.log(country)
  return <CountryCard key={country.name.common} name={country.name.common} capital={country.capital} 
  flag={country.flags.svg} population={country.population} region={country.region}/>
})

  return (
    <div className="countries-container">
   {array}
    </div>
  );
}
