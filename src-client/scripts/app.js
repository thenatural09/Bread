const ReactDOM = require('react-dom');
const React = require('react')
const Backbone = require('backbone');
const AppViewController = require('./view-controller.js')
const LoginView = require('./login.js')

const AppRouter = Backbone.Router.extend({

   routes: {
      "": "showLoginPage"
   },

   showLoginPage: function(){
      ReactDOM.render(<AppViewController routedFrom="LoginView"/>, document.querySelector('#app-container'))
   },

   initialize: function() {
      Backbone.history.start()
}
})



new AppRouter()