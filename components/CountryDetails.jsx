import React, { useEffect, useState } from "react";
import "./CountryDetails.css";
import { Link, useLocation, useParams } from "react-router";
import CountryDetailShimmer from "./CountryDetailsShimmer";
import CountryDetailsShimmer from "./CountryDetailsShimmer";

export default function CountryDetails() {
  const params = useParams();
  const {state} = useLocation();
  const countryName = params.country;
  console.log(state)

  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  function updateCountryData(data){
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
      borders: []
    })

    if(!data.borders){
        data.borders = []
    }

    Promise.all(data.borders.map((border) =>{
        return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        .then((res) => res.json())
        .then(([borderCountry]) =>{
            return borderCountry.name.common
            
        })
    })).then((borders) =>{
        setTimeout(() => setCountryData((prev) => ({...prev, borders})))
    })
  }

  useEffect(() => {

    if (state){
        updateCountryData(state)
    }

    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        updateCountryData(data);
      })
      .catch((err) => {
        console.log(err)
        setNotFound(true);
      });
  }, [countryName]);

  if (notFound) {
    return <div>Page you want to access is not valid</div>;
  }
  return countryData === null ? (
    <CountryDetailsShimmer/>
  ) : (
    <main>
      <div className="country-details-container">
        <span
          className="back-button"
          onClick={() => {
            history.back();
          }}
        >
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
            {countryData.borders.length !== 0 && (
              <div className="border-countries">
                <b>Border Countries: </b>&nbsp;
                {countryData.borders.map((border) => (
                  <Link key={border} to={`/${border}`}>{border}</Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
