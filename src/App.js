import React from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';

import Navbar from './container/Navbar/Navbar';
import Footer from './container/Footer/Footer';
import Home from './Home/Home';

import About from './About/About';
import Signup from './Auth/Signup'
import Explorers from './Explorers/Explorers';

import GuidesContainer from './Guides/GuideContainer';
import GuideDetails from './Guides/GuideDetails';
import Welcome from './Landing/Welcome'
import GuideInfo from './For-Guide/GuideInfo';

const guidesURL = 'https://explorher-backend.herokuapp.com/guides'

class App extends React.Component {
  state = {
    guides: [],
    user: false
  }

  // fetch guides
  componentDidMount() {
    fetch(guidesURL)
    .then(res => res.json())
    .then((guides) => {
      this.setState({ guides })
    })
  }

  // Psuedo-Auth
  handleLogin = () => {
    this.setState({ user: true })
  }

  handleLogout = () => {
    this.setState({ user: false })
  }

  render() {
    const { guides, user } = this.state;
    return (
      <div className="App">
        <Navbar user={ user } handleLogin={ this.handleLogin } handleLogout={this.handleLogout}/>
        <Switch>
          <Route exact path="/" render={ () => <Home guides={ guides }/>} />
          <Route exact path="/about" render={ () => <About />} />
          <Route exact path="/for-explorers" render={ () => <Explorers guides={ guides }/>} />
          <Route exact path="/for-guides" render={ () => <GuideInfo />} />
          <Route exact path="/guides" render={ () => <GuidesContainer guides={ guides } />} />      
          <Route path="/guides/:first_name" render={ () => <GuideDetails guides={ guides } user={ user }/>} />
          <Route exact path="/signup" render={ () => <Signup user={ user } handleSignup={ this.handleLogin }/>} />
          <Route exact path="/my-home" render={ () => <Welcome guides={ guides }/>}/>

        </Switch>
        <Footer />
      </div>  
    ) 
  }
  
}
  
export default  withRouter(App);

