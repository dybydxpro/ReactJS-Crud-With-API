import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Comps/Header';
import Home from './Comps/Home';
import Add from './Comps/Add';
import Edit from './Comps/Edit';
import View from './Comps/View';

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;