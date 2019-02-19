import React, { Component } from 'react';
import 'bulma'

class Login extends Component {
  render() {
    return (
      <div class="columns is-mobile">
        <div class="column is-three-fifths is-offset-one-fifth">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                Login
              </p> 
            </header>
            <div class="card-content">
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input class="input" type="email" placeholder="Email" />
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control has-icons-left">
                  <input class="input" type="password" placeholder="Password" />
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;