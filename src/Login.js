import React, { Component } from 'react';
import 'bulma'
import firebase from 'firebase/app';
import { observer } from 'mobx-react';
import { observable } from 'mobx';


var appState = observable({
  email: '',
  password: ''
});

@observer
class Login extends Component {
  constructor () {
    super()
    var config = {
      apiKey: "AIzaSyC3VUQ1IEZ-7zczU-m4YXRMJrBNK6XpAzU",
      authDomain: "bigdad-react-learn.firebaseapp.com",
      databaseURL: "https://bigdad-react-learn.firebaseio.com",
      projectId: "bigdad-react-learn",
      storageBucket: "bigdad-react-learn.appspot.com",
      messagingSenderId: "854364423895"
    };
    firebase.initializeApp(config);
  }
  handlerLogin () {
    // firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
    //   console.log("Login Success");
    //   console.log(error);
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    // });
  }

  render() {
    return (
      <div className="columns is-mobile">
        <div className="column is-three-fifths is-offset-one-fifth">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">
                Login
              </p> 
            </header>
            <div className="card-content">
              <div className="field">
                <p className="control has-icons-left has-icons-right">
                  <input className="input" type="email" placeholder="Email" />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fas fa-check"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control has-icons-left">
                  <input className="input" type="password" placeholder="Password" />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <div className="has-text-right">
                <button className="button is-primary" onClick={this.handlerLogin}>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;