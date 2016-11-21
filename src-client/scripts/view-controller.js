const React = require('react')
const LoginView = require('./login.js')
const PaymentsView = require('./payments.js')

const AppViewController = React.createClass({
   render: function() {
      switch(this.props.routedFrom) {
         case "LoginView":
            return <LoginView/>
            break;

         case "PaymentsView":
            return <PaymentsView/>
            break;
         }
   }
})

module.exports = AppViewController
