import React from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';

import Navbar from './container/Navbar/Navbar';
import Footer from './container/Footer/Footer';
import Home from './container/Home/Home';

// import About from './About/About';
import Signup from './Auth/Signup'
import Explorers from './Explorers/Explorers';

import GuidesContainer from './Guides/GuideContainer';
import GuideDetails from './Guides/GuideDetails';
import Welcome from './Landing/Welcome'

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
      // console.log(guides)
      // debugger
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

  // // filter
  // selectFilter = (filtered) => {
  //   this.setState({ filtered })
  // }

  render() {
    const { guides, user } = this.state;
    // debugger
    return (
      <div className="App">
        <Navbar user={ user } handleLogin={ this.handleLogin } handleLogout={this.handleLogout}/>
        <Switch>
          <Route exact path="/" render={ () => <Home />} />
          {/* <Route exact path="/about" render={ () => <About />} /> */}
          <Route exact path="/explorers" render={ () => <Explorers guides={ guides }/>} />
          <Route exact path="/guides" render={ () => <GuidesContainer guides={ guides } />} />      
          <Route path="/guides/:first_name" render={ () => <GuideDetails guides={ guides }/>} />
          <Route exact path="/signup" render={ () => <Signup user={ user } handleSignup={ this.handleLogin }/>} />
          <Route exact path="/welcome" render={ () => <Welcome guides={ guides }/>}/>

        </Switch>
        <Footer />
      </div>  
    ) 
  }
  
}
  
export default  withRouter(App);

