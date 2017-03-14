import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import Paper from 'material-ui/Paper';
import { RaisedButton, TextField } from 'material-ui';
import * as firebase from 'firebase'


var config = {
  apiKey: "AIzaSyBvdLH3Mga9ZgxsLQR3wO1sw9aI0Xq6890",
  authDomain: "bloodbank-a3612.firebaseapp.com",
  databaseURL: "https://bloodbank-a3612.firebaseio.com",
  storageBucket: "bloodbank-a3612.appspot.com",
  messagingSenderId: "1079055499192"
};
firebase.initializeApp(config);

const style = {
  height: 150,
  width: 300,
  margin: 50,
  textAlign: 'center',
  display: 'inline-block',
};

class Login extends Component {
    constructor(props) {
        super(props)//for using 'this.'

       this.login = this.login.bind(this)

     }
        login() {
    const email = this.refs.txte.value
    const pass = this.refs.pass.value
    const auth = firebase.auth();
    
    const singup= auth.signInWithEmailAndPassword(email, pass).then((result)=>{
      browserHistory.push("/DonorDetail")
      console.log('login b ho gya')

    }
      
    
    );
  }

    //     this.doLogin = this.doLogin.bind(this)
    // }

    // doLogin() {
    //     var username = this.refs.username.getValue();
    //     var password = this.refs.password.getValue();
    //     console.log(username, password);

    //     browserHistory.push('/dashboard');
    // }
    render() {
        return (<div>
            <div>this is Login</div>
<Paper style={style} zDepth={3} >
            <TextField type="email" hintText="UserEmail" ref="txte" /> <br />
            <TextField type="password" hintText="Password" ref="pass" /> <br />

            <RaisedButton onClick={this.login} primary={true}>
                Login
{console.log('click')}
            </RaisedButton>
</Paper>
        </div>)
    }
}

export default Login;  