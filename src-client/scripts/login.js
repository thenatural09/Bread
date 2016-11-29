const React = require('react')
const Backbone = require('backbone')
const ACTIONS = require('./actions.js')

const LoginView = React.createClass({

   _handleUserAuth: function(evt){
      evt.preventDefault()
      console.log(this);


      let newUserData = {
         username: this.refs.username.value,
         password: this.refs.password.value
      }
      console.log(newUserData)
      ACTIONS.authenticateUser(newUserData)
   },

   render: function() {
     return (
        <div className = "login-container">
          <div className="log-left">
            <form className="form-group grid-container" onSubmit={this._handleUserAuth}>
                  <div className="auth-header-container">
                     <img className="image1" src="../images/logo2.png" alt="image"></img>
                  </div>

                  <div className="form-fields-login">
                     <h2 className="user-label"><label>Username</label></h2>
                     <input className="auth-inputs" ref={'username'} type="text" name="name"/>
                  </div>

                  <div className="form-fields-login">
                     <h2 className="pass-label"><label>Password</label></h2>
                     <input className="auth-inputs" ref={'password'} type="password" name="password"/>
                  </div>

                  <div className="form-fields-btn">
                     <input type="submit" className="login-btn" value="Log in"/>
                  </div>
               </form>
              </div>

              <div className= "log-right">
               <div className= "create-pro">
                 <a href="#create"><button className="button-create"><span>Create Profile</span></button></a>
               </div>

               <div className= "create-about">
                 <button className="button-about"><span>About Our Bread</span></button>
               </div>
               </div>
               </div>

        )
      }
   })

module.exports = LoginView
