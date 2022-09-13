import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './view/Main';
import Detail from './view/Detail';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main />} path="/people/" />
        <Route element={<Detail />} path="/people/:id" />
      </Routes>
    </div>
  );
}
export default App;

