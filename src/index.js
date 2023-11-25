import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import { Chart } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Summary from './components/Summary';
import Nutrition from './components/Nutrition';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} ></Route>
      <Route path='/sec1' element={<Section1 />}></Route>
      <Route path='/sec2' element={<Section2 />}></Route>
      <Route path='/sec3' element={<Section3 />}></Route>
      <Route path='/sec4' element={<Section4 />}></Route>
      <Route path='/sec5' element={<Section5 />}></Route>
      <Route path='/summary' element={<Summary />}></Route>
      <Route path='/dashboard' element={<Nutrition />}></Route>
  
    </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
