import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin'; injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as firebase from 'firebase'


var config = {
  apiKey: "AIzaSyBvdLH3Mga9ZgxsLQR3wO1sw9aI0Xq6890",
  authDomain: "bloodbank-a3612.firebaseapp.com",
  databaseURL: "https://bloodbank-a3612.firebaseio.com",
  storageBucket: "bloodbank-a3612.appspot.com",
  messagingSenderId: "1079055499192"
};
firebase.initializeApp(config);


ReactDOM.render(
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
    , document.getElementById('root')
);
