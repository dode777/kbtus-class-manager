/* eslint-disable */

import React, { Component, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './routers/Router';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    );
  }
}

export default App;
