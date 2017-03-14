import React, { Component } from 'react';
import { Link } from 'react-router'
import FlatButton from 'material-ui/FlatButton';

import {AppBar} from 'material-ui';

class LoginSignup extends Component {
    render() {
        return (
            <div>
                <AppBar title="Blood Bank App"
                 iconElementRight={<FlatButton label="Sign out" />}
                ></AppBar>
               
                <ul>
     
                  <Link to="/login">{<FlatButton label="Login" />}</Link>
                 <Link to="/signup">{<FlatButton label="Signup" />}</Link>

     
                    
                </ul>
                {this.props.children}
            </div>
        )
    }
}

export default LoginSignup;