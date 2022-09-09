import './App.css';
import React from 'react';
import {
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { useParams } from 'react-router-dom'


const Home = (props) => {
  return (
    <div>
      <h1 style={{ color: "white" }}>Home</h1>
    </div>
  );
}

const DisplayValue = (props) => {
  const { value } = useParams();

  if (isNaN(+value) == false) {
    console.log("value is a number")
    return (
      <div>
        <h1 style={{ color: "white" }}> {value} </h1>
      </div>
    )
  }
  else{
    console.log("value is not a number")
    return (
      <div>
        <h1 style={{ color: "purple" }}> {value} </h1>
      </div>
    )
  }
}

const DisplayStyledValue = (props) => {
  const { value } = useParams();
  const { textcolor } = useParams();
  const { background } = useParams();

  return (
    <div>
      <h1 style={{ color: textcolor, background: background }}>{ value }</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1> Routing Example</h1>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:value" element={<DisplayValue />} />
        <Route path="/:value/:textcolor/:background" element={<DisplayStyledValue />} />

      </Routes>
    </div>
  );
}

export default App;
