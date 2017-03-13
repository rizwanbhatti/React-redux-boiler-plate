import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import Paper from 'material-ui/Paper';
import { RaisedButton, TextField } from 'material-ui';

const style = {
  height: 150,
  width: 300,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class Login extends Component {
    constructor(props) {
        super(props)//for using 'this.'
        this.doLogin = this.doLogin.bind(this)
    }

    doLogin() {
        var username = this.refs.username.getValue();
        var password = this.refs.password.getValue();
        console.log(username, password);

        browserHistory.push('/dashboard');
    }
    render() {
        return (<div>
            <div>this is Login</div>
<Paper style={style} zDepth={3} >
            <TextField type="text" hintText="username" ref="username" /> <br />
            <TextField type="text" hintText="password" ref="password" /> <br />

            <RaisedButton onClick={this.doLogin} primary={true}>
                Login
            </RaisedButton>
</Paper>
        </div>)
    }
}

export default Login;  