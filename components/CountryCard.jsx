import React from 'react';

export default function CountryCard() {
  return (
    <a href="/country.html?name=Barbados" className="country-card">
        <img src="https://flagcdn.com/bb.svg" alt="Barbados flag" />
        <div className="card-text">
            <h3 className='card-title'>Barbados</h3>                        
            <p><b>Population: </b> </p>
            <p><b>Religion: </b> </p>
            <p><b>Capital: </b> </p>
        </div>
    </a>
  );
}
