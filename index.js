import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App1 from './App1';
import Put from './Put';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Delete from './Delete';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <App />
    <Routes>
    <Route path="/Home" element={ <Home /> } />
    <Route path="/" element={ <Login/> } />
    <Route path="/Register" element={ <Register/> } />
      <Route path="/App1" element={ <App1 /> } />
      <Route path="/Put/:id" element={ <Put /> }></Route>
      <Route path="/Delete/:id" element={ <Delete /> }></Route>




    </Routes>
  </Router>
);


reportWebVitals();
