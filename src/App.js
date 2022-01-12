import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Footer, Features, Blog, Header, Possibility, Contact } from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Contact />
    <Footer />
  </div>
);

export default App;
