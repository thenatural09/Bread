const React = require('react')
const Backbone = require('backbone')
const ACTIONS = require('./actions')

const NewPaymentsView = React.createClass({

   _handlePaymentSubmission: function(evt){
   evt.preventDefault()
   //console.log(this)

   let newPaymentData = {
      budgetName: this.refs.name.value,
      income: this.refs.income.value,
      rent: this.refs.rent.value,
      utilities: this.refs.utilities.value,
      other: this.refs.other.value
   }
   console.log(newPaymentData)
   ACTIONS.submitNewPayments(newPaymentData)
},
   render: function() {
      return (

            <div className="payment-container">
               <form className="form-group grid-container" onSubmit={this._handlePaymentSubmission}>
                  <div className="row auth-container-row">

                     <div className="form-field income-container col-sm-12 col-md-12">
                        <h2 className="pay-label"><label>Budget name</label></h2>
                        <input className="payment-inputs" ref={'name'} type="text" name="name"/>
                     </div>

                     <div className="form-field income-container col-sm-12 col-md-12">
                        <h2 className="pay-label"><label>Income</label></h2>
                        <input className="payment-inputs" ref={'income'} type="text" name="name"/>
                     </div>

                     <div className="form-field rent-container col-sm-12 col-md-12">
                        <h2 className="pay-label"><label>Rent</label></h2>
                        <input className="payment-inputs" ref={'rent'} type="text" name="name"/>
                     </div>

                     <div className="form-field util-container col-sm-12 col-md-12">
                        <h2 className="pay-label"><label>Utilities</label></h2>
                        <input className="payment-inputs" ref={'utilities'} type="text" name="name"/>
                     </div>

                     <div className="form-field other-container col-sm-12 col-md-12">
                        <h2 className="pay-label"><label>Other</label></h2>
                        <input className="payment-inputs" ref={'other'} type="text" name="name"/>
                     </div>

                     <div className="form-field btn-container col-sm-12 col-md-12">
                        <input type="submit" className="btn btn-default" value="Oven!" />
                     </div>
                  </div>
               </form>

               <div className="form-field btn-container col-sm-12 col-md-12">
                  <input type="submit" className="btn btn-default" value="Statements page" />
               </div>
            </div>

      )
   }
})

module.exports = PaymentsView
