import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import ImageHolder from './components/ImageHolder';
import {randomNumbers, SetGame } from './components/SetGame';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SetGame />
    {/* <randomNumbers /> */}
    {/* <ImageHolder /> */}
    <App />
    {/* <GamePicker /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

