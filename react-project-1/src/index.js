import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

const page = (
  <div>
    <img src="./react-logo.png" width="80px"></img>
    <h1>Fun facts about react</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was orginially created by Jordan Walke</li>
      <li>Has well over 100K stars on GIthub</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </div>
);

root.render(page);
