import React from 'react';
import './App.css';

import PersonCard from './components/PersonCard.js'

function App() {

  return (
    <div className="App">
      <PersonCard firstName={"Jane"} lastName={"Doe"} age={420} hairColor={"Blue"}/>
      <PersonCard firstName={"John"} lastName={"Smith"} age={333} hairColor={"Brick"}/>
      <PersonCard firstName={"Millard"} lastName={"Fillmore"} age={444} hairColor={"Malard-Brown"}/>
      <PersonCard firstName={"Maria"} lastName={"Smith"} age={555} hairColor={"Green"}/>
    </div>
  );
}

export default App;
