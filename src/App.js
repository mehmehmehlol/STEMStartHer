import React from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';

import Navbar from './container/Navbar/Navbar';
import Footer from './container/Footer/Footer';
import Home from './container/Home/Home';
import About from './About/About';
import Explorers from './Explorers/Explorers';
import GuidesContainer from './Guides/GuideContainer';
import GuideDetails from './Guides/GuideDetails';

class App extends React.Component {
  state = {
    guides: [],
  }

  // fetch guides 
  componentDidMount() {
    fetch('http://localhost:3000/guides')
    .then(res => res.json())
    .then(guides => {
      debugger
      this.setState({ guides })
    })
  }

  render() {
    const { guides } = this.state;
    // debugger
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" render={ () => <Home />} />
          <Route exact path="/about" render={ () => <About />} />
          <Route exact path="/explorers" render={ () => <Explorers guides={ guides }/>} />
          <Route exact path="/guides" render={ () => <GuidesContainer guides={ guides } />} />      
          <Route path="/guides/:first_name" render={ () => <GuideDetails guides={ guides }/>} />
          {/* <Route exact path="/login" render={ () => <Auth />} />
          <Route exact path="/signup" render={ () => <Auth />} /> */}
        </Switch>
        <Footer />
      </div>  
    ) 
  }
  
}
  
export default  withRouter(App);

