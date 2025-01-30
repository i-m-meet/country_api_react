import React from 'react';

export default function CountryCard({key, name,capital,flag,population,region}) {
  return (
    <a href="/country.html?name={}name" className="country-card" key={key}>
        <img src={flag} alt="{name} flag" />
        <div className="card-text">
            <h3 className='card-title'>{name}</h3>                        
            <p><b>Population:{population} </b> </p>
            <p><b>Region: {region} </b> </p>
            <p><b>Capital:{capital} </b> </p>
        </div>
    </a>
  );
}
