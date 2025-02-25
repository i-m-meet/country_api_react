import React from 'react';
import { Link } from 'react-router';

export default function CountryCard({name,capital,flag,population,region,data}) {
  return (
    <Link to={`/${name}`}  className="country-card" state={data}>
        <img src={flag} alt={name + " flag"}  />
        <div className="card-text">
            <h3 className='card-title'>{name}</h3>                        
            <p><b>Population:{population} </b> </p>
            <p><b>Region: {region} </b> </p>
            <p><b>Capital:{capital} </b> </p>
        </div>
    </Link>
  );
}
