// App.js
// ****************************************************
// ***** client side - src/App.js                 *****
// ***** This is the App wrapper for the frontend *****
// ****************************************************

// node modules
import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 

import 'bootstrap/dist/css/bootstrap.min.css';

// local modules
import Header from './components/wrappers/Header';
import Footer from './components/wrappers/Footer';
import Graphic from './components/segments/Graphic';
import WebServices from './components/segments/WebServices';
import FinancialServices from './components/segments/FinancialServices';
import RetailServices from './components/segments/RetailServices';
import HospitalityServices from './components/segments/HospitalityServices';
import HealthServices from './components/segments/HealthServices';
import Blog from './components/segments/Blog';

import './styling/App.css';
import './styling/Grid.css';
import './styling/Media.css';

const App = () => {

  return (
    // <Router>
      <div className='landing'>
        <Header />
        <Graphic />
        <div className='wrapper'>
        <div className='services'>
          <WebServices />
          <FinancialServices />
          <RetailServices />
          <HospitalityServices />
          <HealthServices />
          <Blog />
          </div>
        </div>
        <Footer />
      </div>
    // </Router>
  )
}

export default App;