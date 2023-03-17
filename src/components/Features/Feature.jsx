import React from "react";
import './Feature.css';

export default function Feature({ icon, title, description }) {
  return (
    <div className="feature-item">
      <img src={`/icon-${icon}.png`} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
