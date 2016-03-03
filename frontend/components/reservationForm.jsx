var React = require('react');
// var LinkedStateMixin = require('react-addons-linked-state-mixin');
var moment = require('moment');
var ReservationStore = require('../stores/reservationStore.js');
var ReservationActions = require('../actions/reservationActions.jsx');
var FilterStore = require('../stores/filter_params');

var ReservationForm = React.createClass({

  getInitialState: function() {
    return {
      message: "Send a message to your host!"
    }
  },
  // mixins: [LinkedStateMixin],

  handleSubmit: function(e) {
    // console.log(e);
    e.preventDefault();
    // Get roomId from url this.props....
    // get filter_params from the store
    // get data from form
    // send all data to actionHandler
    
    ReservationActions.createNewReservation({
      roomID: this.props.room.id,
      guests: FilterStore.params().max_sleep_num,
      //TODO may cause errors because dates are in form of moments
      startDate: FilterStore.params().dates.startDate,
      endDate: FilterStore.params().dates.endDate,
      message: this.state.message
    });


  },

  messageHandler(message) {
    this.setState({
      message: message
    })
  },

  render: function() {
    // var roomID = this.props.

    var host = ReservationStore.params.host;
    return (
      <div className="container-fluid">
          <div className="col-xs-12 col-md-7">
            <form
               className="input-group col-xs-12"
               onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="payment-container">
                  <h3>Payment</h3>
                  <div className="form-group col-xs-6">
                  <label htmlFor="payment-method">Payment Method</label>
                    <select
                       className="form-control"
                       id="payment-method"
                       >
                      <option>AMEX xxxxxxxxxx3001</option>
                      <option>VISA xxxxxxxxxx6503</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <h3>Introduce Yourself to {host}</h3>
                <p>Giving your host more information will make them more likely to confirm your booking request:</p>
                <div className="row">
                  <div className="col-xs-2 no-padding-right">




                  </div>
                  <div className="col-xs-10 no-padding-left">
                    <ul>
                      <li>Tell Nhat a little about yourself</li>
                      <li>What brings you to San Francisco? Who’s joining you?</li>
                      <li>What do you love about this listing? Mention it!</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row row-space-3">
                <div className="input-group col-xs-12">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Message your host..."
                    onChange={this.messageHandler}
                    >
                  </textarea>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12">
                  <div className="row">
                    <div className="checkbox">
                      <label>
                        <input
                          type="checkbox"
                          value="agreement"
                          required
                          title="Before booking agree to the House Rules and Terms."
                          >
                        </input>
                        I agree to the House Rules, Cancellation Policy, and to the Guest Refund Policy. I also agree to pay the total amount shown, which includes Occupancy Taxes and Service Fees.
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <button
                      type="submit"
                      className="btn btn-primary center-block">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="col-xs-12 col-md-offset-1 col-md-4">
            <div className="row">




            </div>
            <div className="row">
              <h4>Room Title</h4>
              <p>City</p>
            </div>
            <div className="row">
              <p>
                <strong>Private</strong>
                {" for "}
                <strong>3 Guests</strong>
              </p>
              <p>
                {"From "}
                <strong>
                  Checkin Date
                </strong>
                {" to "}
                <strong>
                  Checkout Date
                </strong>
              </p>
            </div>
            <div className="row">
              <table className="table">
                <tbody>
                  <tr>
                    <td>
                      {"$100"}
                    </td>
                    <td>
                      {"$200"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Cleaning fee
                    </td>
                    <td>
                      {"$20"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Service fee
                    </td>
                    <td>
                      {"$30"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Occupancy Taxes
                    </td>
                    <td>
                      {"$50"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Total
                    </td>
                    <td>
                      {"$330?"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>



        </div>


    );
  }

});

module.exports = ReservationForm;
