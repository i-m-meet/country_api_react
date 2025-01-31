import React from 'react';
import "./CountriesListShimmer.css"

export default function CountryListShimmer() {

 

  return (
    <div className="countries-container">
        {
            Array.from({length: 12}).map((element, index) =>{
                return <div key={index} className="country-card shimmer-card" ></div>
            })
        }
    </div>
  );
}
