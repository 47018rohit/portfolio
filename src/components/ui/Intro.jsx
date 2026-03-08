import React from 'react';
import './Intro.css';

export default function Intro({ onEnter }) {
  return (
    <div className="intro">
      <div className="intro-grid" />
      <div className="intro-tag">Interactive 3D Portfolio</div>
      <div className="intro-name">
        Rohit<br /><span>Prakash</span>
      </div>
      <div className="intro-role">Senior Software Engineer · 5 yrs</div>
      <div className="intro-sub">Kafka · React · Node.js · Redis · TypeScript</div>
      <button className="intro-btn" onClick={onEnter}>Enter World</button>
    </div>
  );
}
