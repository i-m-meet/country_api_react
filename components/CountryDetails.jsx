import React, { useEffect, useState } from "react";
import "./CountryDetails.css";
import { useParams } from "react-router";

export default function CountryDetails() {
//   const countryName = new URLSearchParams(location.search).get("name");
    const params = useParams();
    const countryName = params.country;
    

  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
          setCountryData({
            country: data.name.common,
            flag: data.flags.svg,
            nativeName: Object.values(data.name.nativeName)[0].common,
            population: data.population,
            region: data.region,
            subregion: data.subregion,
            capital: data.capital,
            tld: data.tld,
            currencies: Object.values(data.currencies)
              .map((currency) => currency.name)
              .join(", "),
            languages: Object.values(data.languages).join(" ,"),
            // borders: Object.values(data.borders).map((border)=> border).join(', ')
          });
      }).catch(err =>{
        setNotFound(true);
      });
  }, []);

  if(notFound){
    return <div>Page you want to access is not valid</div>
  }
  return countryData === null ? (
    "Loading...."
  ) : (
    <main>
      <div className="country-details-container">
        <span className="back-button" onClick={(()=>{history.back()})}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img src={countryData.flag} alt={`${countryData.name} flag`} />
          <div className="details-text-container">
            <h1>{countryData.country}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: {countryData.nativeName}</b>
                <span className="native-name"> </span>
              </p>
              <p>
                <b>Population: {countryData.population} </b>
                <span className="population"> </span>
              </p>
              <p>
                <b>Region: {countryData.region}</b>
                <span className="region"> </span>
              </p>
              <p>
                <b>Sub Region : {countryData.subregion}</b>
                <span className="sub-region"> </span>
              </p>
              <p>
                <b>Capital : {countryData.capital.join(", ")} </b>
                <span className="capital"> </span>
              </p>
              <p>
                <b>Top Level Domain : {countryData.tld}</b>
                <span className="top-level-domain"></span>
              </p>
              <p>
                <b>Currencies : {countryData.currencies} </b>
                <span className="currencies"> </span>
              </p>
              <p>
                <b>Language : {countryData.languages} </b>
                <span className="language"> </span>
              </p>
            </div>
            <div className="border-countries">
              <b>Border Countries: {countryData.borders} </b>&nbsp;
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
