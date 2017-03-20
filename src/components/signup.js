import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import * as firebase from "firebase";
import { RaisedButton, TextField } from 'material-ui';
import Paper from 'material-ui/Paper';

const style = {
    height: 300,
    width: 320,
    padding: 20,
};
class Signup extends Component {

    constructor(props) {
        super(props)
        this.signup = this.signup.bind(this);
    }
    signup(ev) {
        ev.preventDefault();
        const name = this.refs.name.getValue();
        const email = this.refs.txte.getValue();
        const pass = this.refs.pass.getValue();
        console.log(name, email, pass)
        alert('Congratulations'+''+name)
        let userId = firebase.auth().currentUser.uid;

        firebase.auth().createUserWithEmailAndPassword(email, pass).then((result) => {
            let userDetail = {
                username: name,
                useremail: email
            }
            browserHistory.push('/login')
            firebase.database().ref('UserInfo/' + userId).set(userDetail)
        })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
            });
    }

    render() {
        return (
            <center>
                <div>
                    <h1>Signup</h1>
                    <Paper style={style} zDepth={3} >

                        <TextField type="text" hintText="Name" floatingLabelText="Full Name" ref="name" /> <br />
                        <TextField type="email" hintText="Email" floatingLabelText="E-mail" ref="txte" /> <br />
                        <TextField type="password"  hintText="Password" floatingLabelText="Password" ref="pass" /><br /><br />
                        <RaisedButton primary={true} onClick={this.signup}> SIGNUP  </RaisedButton>
                        
                    </Paper>
                </div>
            </center>)
    }
}
export default Signup;