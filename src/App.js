import React, { Component } from 'react';
import './App.css';
import { Router, Route, IndexRoute, browserHistory, } from 'react-router'
import home from './containers/home'
import Login from './components/login'
import Signup from './components/signup'
import DonorDetail from './components/donorDetail'
import Bar from './components/appbar'
import Thanks from './components/thanks'
import DonorList from './components/donor-list'

class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Bar}>
                    <IndexRoute component={home} />
                    <Route path="signup" component={Signup} />
                    <Route path="login" component={Login} />
                    <Route path="donorDetail" component={DonorDetail} />
                    <Route path="thanks" component={Thanks} />
                    <Route path="donor-list" component={DonorList} />
                </Route>
            </Router>
        )
    }
}

export default App;
