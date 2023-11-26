import 'bootstrap/dist/css/bootstrap.min.css';
import type React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage';

function App(): React.JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/services' element={<h1>Services</h1>} />
        <Route path='/contact-us' element={<h1>Contact Us</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
