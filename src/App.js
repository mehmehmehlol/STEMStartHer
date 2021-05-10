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
import Welcome from './Landing/Welcome'
// import Login from './Auth/Login'
import Signup from './Auth/Signup'
// import FormSelection from './Auth/FormSelection';
// import Signup from './Auth/Signup';
// import FormUserDetails from './Auth/FormUserDetails';

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
      console.log(guides)
      // debugger
      this.setState({ guides })
    })
  }

  handleLogin = () => {
    this.setState({ user: true })
  }

  handleLogout = () => {
    this.setState({ user: false })
  }

  fetchSignupForm = () => {

  }

  render() {
    const { guides, user } = this.state;
    // debugger
    return (
      <div className="App">
        <Navbar user={ user } handleLogin={ this.handleLogin } handleLogout={this.handleLogout}/>
        <Switch>
          <Route exact path="/" render={ () => <Home />} />
          <Route exact path="/about" render={ () => <About />} />
          <Route exact path="/explorers" render={ () => <Explorers guides={ guides }/>} />
          <Route exact path="/guides" render={ () => <GuidesContainer guides={ guides } />} />      
          <Route path="/guides/:first_name" render={ () => <GuideDetails guides={ guides }/>} />
          <Route exact path="/signup" render={ () => <Signup />} />
          {/* <Route exact path="/signup-page-2" render={ () => <FormUserDetails />} /> */}
          {/* <Route exact path="/login" component={ this.renderForm } /> */}
          <Route exact path="/welcome" render={ () => <Welcome />}/>

        </Switch>
        <Footer />
      </div>  
    ) 
  }
  
}
  
export default  withRouter(App);

