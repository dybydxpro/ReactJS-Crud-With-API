import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Comps/Header';
import Home from './Comps/Home';
import Add from './Comps/Add';
import Edit from './Comps/Edit';


function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;