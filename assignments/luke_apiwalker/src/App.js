import './App.css';
import React from 'react';
import { useEffect } from 'react';
import {
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


import Results from './component/Results'
import Query from './component/Query'
import NotFound from './component/NotFound'

function App() {
  return (
    <div className="App">
      <Query />
      <Routes>
        <Route index path="/results/:type/:id" element={<Results />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>

  );
}

export default App;
