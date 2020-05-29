import React from 'react';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import {Route, Switch} from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Foooter';

function App() {
  return (
    <>
    <Navbar />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
