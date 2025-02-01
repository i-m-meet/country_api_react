import React from 'react';
import './CountryDetailsShimmer.css'; 

export default function CountryDetailsShimmer() {
  return (
    <div className="shimmer-wrapper">
      <div className="shimmer-box">
        <div className="shimmer"></div>
      </div>
      <div className="shimmer-box">
        <h1 className="shimmer"></h1>
        <p className="shimmer"></p>
        <p className="shimmer"></p>
        <p className="shimmer"></p>
        <p className="shimmer"></p>
        <p className="shimmer"></p>
      </div>
    </div>
  );
}
