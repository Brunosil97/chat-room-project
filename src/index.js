import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import LoginComponent from './login/login'
import SignupComponent from './signup/signup'
import DashboardComponent from './dashboard/dashboard'

const firebase = require("firebase");
require("firebase/firestore")

firebase.initializeApp({
  apiKey: "AIzaSyBZaqSTeagPXhdUP6696h5TBPXyfeh9GEs",
  authDomain: "instant-messaging-project.firebaseapp.com",
  databaseURL: "https://instant-messaging-project.firebaseio.com",
  projectId: "instant-messaging-project",
  storageBucket: "instant-messaging-project.appspot.com",
  messagingSenderId: "43935328083",
  appId: "1:43935328083:web:b8cac830fa9fbc2d1be3a6",
  measurementId: "G-D55N85PWTR"
})

const routing = (
  <Router>
    <div id="routing-component">
      <Route exact path="/login" component={LoginComponent} />
      <Route ecxact path="/dashboard" component={DashboardComponent} />
      <Route exact path="/signup" component={SignupComponent} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
