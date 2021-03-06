var React = require('react');
var moment = require('moment');
var ReservationStore = require('../stores/reservationStore.js');
var FilterStore = require('../stores/filter_params');
var ApiUtil = require('../util/apiUtil.js');
var SessionStore = require('../stores/sessionStore.js');
var RoomShow = require('./RoomShow.jsx');
var History = require('react-router').History;
var ReservationForm = React.createClass({
  mixins: [History],
  getInitialState: function() {
    return {
      message: "Send a message to your host!"
    }
  },

  handleSubmit: function(e) {
    e.preventDefault();
    if (SessionStore.currentUser()) {
      ApiUtil.createReservation({
        roomId: this.props.room.id,
        guests: FilterStore.params().max_sleep_num,
        guestId: SessionStore.currentUser(),
        startDate: FilterStore.params().dates.startDate,
        endDate: FilterStore.params().dates.endDate,
        message: this.state.message
      });

      this.history.push({pathname: '/users/' + SessionStore.currentUser.id})

    } else {
      window.location.replace("http://localhost:3000/session/new");
    }

  },

  messageHandler: function(e) {

    e.preventDefault();
    this.setState({
      message: e.target.value
    })
  },

  render: function() {

    var nights = FilterStore.params().dates.endDate.diff(FilterStore.params().dates.startDate, 'days');
    var room = this.props.room;
    var serviceFee = 200;
    var taxes = 0.1;

    return (

      <div className="reg-most-outer-container">
        <div className="reserve-left">
          <form
            className="input-group col-xs-12"
            onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="reg-payment-container">
                <div className="reg-payment-title">
                  <h3>Payment</h3>
                </div>
                <div className="reg-payment-cards">
                  <select
                    className="payment-form-control"
                    id="payment-method">
                    <option>VISA xxxxxxxxxx6503</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="reserve-message-container">

              <div className="row">
                <div className="reserve-host-pic-container">
                  <img
                    className="reserve-host-pic"
                    src={room.host.profile_pic} />
                </div>
                <div className="reserve-host-intro">
                  <ul className="reserve-host-ul">
                    <li>Tell {room.host.username} about yourself</li>
                    <li>What brings you to this Lair? What are your plans?</li>
                    <li>Should he leave the city?</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="reserve-host-message-container">
              <div className="reserve-host-message">
                <textarea
                  className="form-control"
                  id="message-host-form"
                  rows="5"
                  placeholder="Message your host..."
                  onChange={this.messageHandler}
                  >
                </textarea>
              </div>
            </div>

            <div className="row">
              <div>
                <div className="row" id="agreement-box">
                  <div className="agreement-checkbox">
                    <label>
                      <input
                        type="checkbox"
                        value="agreement"
                        required
                        title="You must agree to the House Rules and Terms."
                        >
                      </input>
                      I agree to the House Rules, Cancellation Policy, and to the Guest Refund Policy. I also agree to pay the total amount shown, which includes Occupancy Taxes and Service Fees.
                    </label>
                  </div>
                </div>
                <div className="reserve-button">
                  <button
                    type="submit"
                    className="registration-form-submit-button"
                    onClick={this.handleSubmit}>
                    BOOK NOW
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="reservation-review-container">
          <div className="reserve-room-pic-container">
            <img
              className="reserve-room-pic"
              src={room.primary_photo_url} />
          </div>
          <div className="reserve-room-info">

              <p><strong>{room.title}</strong></p>
              <p>{room.location}</p>


          </div>
          <div className="row">
            <p>
              <strong>{room.type}</strong>
              {" for "}
              <strong>{room.max_sleep_num + (room.guests === "1" ? " guest" : " guests")}</strong>
            </p>
            <p>
              {"From "}
              <strong>
                {moment(FilterStore.params().dates.startDate, 'MM-DD-YYYY').format('ddd, MMM DD, YYYY')}
              </strong>
              {" to "}
              <strong>
                {moment(FilterStore.params().dates.endDate, 'MM-DD-YYYY').format('ddd, MMM DD, YYYY')}
              </strong>
            </p>
          </div>
          <div className="row">
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    {"$" + room.price + " × " + nights + " night"}
                  </td>
                  <td>
                    {"$" + room.price * nights}
                  </td>
                </tr>
                <tr>
                  <td>
                    Service fee
                  </td>
                  <td>
                    {"$" + 200}
                  </td>
                </tr>
                <tr>
                  <td>
                    Occupancy Taxes
                  </td>
                  <td>
                    {"$" + Math.floor(room.price*nights*taxes)}
                  </td>
                </tr>
                <tr>
                  <td>
                    Total
                  </td>
                  <td>
                    {"$" + (room.price*nights + serviceFee + Math.floor(room.price*nights*taxes))}
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
