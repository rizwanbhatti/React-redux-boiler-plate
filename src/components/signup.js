import React, { Component } from 'react';
//import { browserHistory } from 'react-router'
import * as firebase from "firebase";
import { RaisedButton, TextField } from 'material-ui';
import Paper from 'material-ui/Paper';

const style = {
  height: 185,
  width: 300,
  margin: 250,
  textAlign: 'center',
  display: 'inline-block',
};


class Signup extends Component {

    constructor(props) {
        super(props)
        this.signup = this.signup.bind(this);
    }
signup() {
    const name = this.refs.name.getValue();
    const email = this.refs.txte.getValue();
    const pass = this.refs.pass.getValue();
    const auth = firebase.auth();
    const signup = auth.createUserWithEmailAndPassword(email, pass).then(
      (result) => {
        let userDetail = { useremail: email,     
     }
        firebase.database().ref("userinfo/").push(userDetail)
        console.log(email, pass ,name)
        console.log('yahooo')
      })
  }
    // doSignup() {
    //     var name = this.refs.name.getValue();
    //     var username = this.refs.username.getValue();
    //     var password = this.refs.password.getValue();
    //     console.log(name, username, password);

    //     browserHistory.push('/login');
    // }

    render() {
        return (<div>
            <div>This is Signup</div>
            <Paper style={style} zDepth={3} >

            <TextField type="text" hintText="Name" ref="name" /> <br />
            <TextField type="text" hintText="UserName" ref="txte" /> <br />
            <TextField type="text" hintText="Password" ref="pass" /> <br />

            <RaisedButton primary={true} onClick={this.signup}>
                Signup
            </RaisedButton>
</Paper>
        </div>)
    }
}
export default Signup;