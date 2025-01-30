import React from 'react';
import countriesData from '../countriesData';
import CountryCard from './CountryCard';

export default function CountriesList() 
{
  return (
    <div className="countries-container">
   <CountryCard/>
    </div>
  );
}
