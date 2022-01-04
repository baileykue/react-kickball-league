import React from 'react';
import './Home.css';

export default function Home() {
  // trying to get green check on github

  return (
    <div className="home">
      <h1>This is the Home Page</h1>
      <p>Please select a link above for more info about our teams and players</p>
      <img src={`${process.env.PUBLIC_URL}/soccer-ball-variant.png}`} />
    </div>
  );
}
