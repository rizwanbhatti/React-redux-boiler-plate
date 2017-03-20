import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import Paper from 'material-ui/Paper';
import { RaisedButton, TextField } from 'material-ui';
import * as firebase from 'firebase'



const style = {
  height: 200,
  width: 300,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class Login extends Component {
  constructor(props) {
    super(props)//for using 'this.'

    this.login = this.login.bind(this)

  }
  login(ev) {
    ev.preventDefault();
    const email = this.refs.txte.getValue();
    const pass = this.refs.pass.getValue();
    firebase.auth().signInWithEmailAndPassword(email, pass).then((result) => {
      browserHistory.push("/donorDetail");
      console.log('login b ho gya')
    }).catch((err) => {
      if (err) {
        alert(err)
        browserHistory.push("/Signup")
      }
    });
  }
  render() {
    return (
      <div>
        <center>

          <h1>Login</h1>
          <Paper style={style} zDepth={3} >
            <TextField type="email" hintText="UserEmail" floatingLabelText="Email" ref="txte" /> <br />
            <TextField type="password" hintText="Password" floatingLabelText="Password" ref="pass" /> <br />
            <br /><RaisedButton onClick={this.login} primary={true}style={{float :'right'}}>Login</RaisedButton><br />
          </Paper>
        </center>
          <RaisedButton onClick={this.login} primary={true}>Signup</RaisedButton>  
      </div>
    )
  }
}

export default Login;  