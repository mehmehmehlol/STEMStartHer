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
import Login from './Auth/Login'
import Signup from './Auth/Signup'

const profileURL = 'http://localhost:3000/profile'
const guidesURL = 'http://localhost:3000/guides'

class App extends React.Component {
  state = {
    guides: [],
    user: null
  }

  // componentDidMount() {
  //   let token = localStorage.getItem('token')
  //   if (token) {
  //     fetch((profileURL), {
  //       headers: {
  //         'Authorization': `Bearer ${token}`,
  //       }
  //     })
  //     .then(res => res.json())
  //     .then((user) => {
  //       console.log(user)
  //       // debugger
  //       this.setState({ user })
  //     })
  //   }, 
  //   fetch(('http://localhost:3000/guides')
  //   .then(res => res.json())
  //   .then((guides) => {
  //     console.log(guides)
  //     // debugger
  //     this.setState({ guides })
  //   })
  // }

  componentDidMount() {
    Promise.all([
      fetch(profileURL), 
      fetch(guidesURL)
    ])
    .then(res => Promise.all(res.map(r => r.json())))
    .then(([user, guides]) => {
      console.log(user)
      console.log(guides)
    })
    // .then(([user, guides]) => this.setState({
    //   user,
    //   guides
    // }))
  }
  
  
  // fetch guides 
  // componentDidMount() {
  //   fetch('http://localhost:3000/guides')
  //   .then(res => res.json())
  //   .then(guides => {
  //     this.setState({ guides })
  //   })
  // }

  // auth
  renderForm = (routerProps) => {
    if (routerProps.location.pathname === "/login"){
      return <Login handleSubmit={this.handleLogin} />
    } else if (routerProps.location.pathname === "/signup"){
      return <Signup handleSubmit={this.handleSignup} />
    }
  }

  handleLogin = (info) => {
    this.handleSigninFetch(info, 'https://localhost:3000/login')
  }

  handleSignup = (info) => {
    this.handleSignupFetch(info, 'https://localhost:3000/users' )
  }

  handleSigninFetch = (info, request) => {
    fetch(request, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
       //  "Authorization": "application/json"
      },
      body: JSON.stringify({
        username: info.username,
        password: info.password,
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
     //  debugger
      localStorage.setItem('token', data.token)
      this.setState({
         user: data.user.data.attributes
       }, () => {
       this.props.history.push('/') 
       })
   })
   .catch(errors => console.log(errors))
 }

   handleSignupFetch = (info, request) => {
      fetch(request, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
         //  "Authorization": "application/json"
        },
        body: JSON.stringify({
          
           first_name: info.first_name,
           last_name: info.last_name,
           username: info.username,
           password: info.password
        })
      })
      .then(res => res.json())
      .then(data => {
       //  console.log(data)
       //  debugger
        localStorage.setItem('token', data.token)
        this.setState({
          user: data.user.data.attributes
         }, () => {
         this.props.history.push('/') 
        }
       )
       })
       .catch(errors => console.log(errors))
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
          {/* <Route exact path="/login" component={ this.renderForm } />
          <Route exact path="/signup" component={ this.renderForm } /> */}
        </Switch>
        <Footer />
      </div>  
    ) 
  }
  
}
  
export default  withRouter(App);

