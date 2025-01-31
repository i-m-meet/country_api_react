import React from 'react';
import './CountryDetailsShimmer.css'; 

export default function CountryDetailShimmer() {
  return (
    <div className="shimmer-wrapper">
      <div className="shimmer-card">
        <div className="shimmer"></div>
      </div>
      <div className="shimmer-card">
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
