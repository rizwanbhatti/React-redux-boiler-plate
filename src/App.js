import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Router, Route,  browserHistory, IndexRoute } from 'react-router'

import LoginSignup from './containers/login-signup'
import Login from './components/login'
import Signup from './components/signup'
import Apni from './components/apni'

class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>

                <Route path="/" component={LoginSignup}>
                    <IndexRoute component={Login} />
                    <Route path="apn" component={Apni}/>
                     <Route path="signup" component={Signup} />
                    <Route path="login" component={Login} />
                   
                </Route>

             
        

            </Router>
        )
    }
}

export default App;
