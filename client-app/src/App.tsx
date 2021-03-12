import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
const [activities, setActivities] = useState([])

useEffect(() => {
  axios.get('http://localhost:400/api/activities').then(Response =>{
    console.log(Response);
    setActivities(Response.data);
  })
}, [])//we use the empty bracket to make sure we dont loop over the same thing


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {activities.map((acitivity: any) =>
            <li key={acitivity.id}>
              
            </li>
          )}
        </ul>
      </header>
    </div>
  );
}

export default App;
