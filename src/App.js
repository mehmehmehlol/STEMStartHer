import React from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';

import Navbar from './container/Navbar/Navbar';
import Footer from './container/Footer/Footer';
import Home from './container/Home/Home';
import About from './About/About';
import Explorers from './Explorers/Explorers';
import Guides from './Guides/GuidesContainer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" render={ () => <Home />} />
          <Route exact path="/about" render={ () => <About />} />
          <Route exact path="/explorers" render={ () => <Explorers />} />
          <Route exact path="/guides" render={ () => <Guides />} />
          {/* <Route exact path="/login" render={ () => <Auth />} />
          <Route exact path="/signup" render={ () => <Auth />} /> */}
        </Switch>
        <Footer />
      </div>  
    ) 
  }
  
}
  
export default  withRouter(App);

