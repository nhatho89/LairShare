var React = require('react');
// var LinkedStateMixin = require('react-addons-linked-state-mixin');
var moment = require('moment');
var ReservationStore = require('../stores/reservationStore.js');
// var ReservationActions = require('../actions/reservationActions.jsx');
var FilterStore = require('../stores/filter_params');
var Modal = require('react-modal');
var modalStyle = require('./modalStyle.jsx');
var ApiUtil = require('../util/apiUtil.js');
var UserStore = require('../stores/userStore.js');
var RoomShow = require('./RoomShow.jsx');

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
    // this.openConfirmationModal();
    // Get roomId from url this.props....
    // get filter_params from the store
    // get data from form
    // send all data to actionHandler


    this.props.openConfirmationModal();
    ApiUtil.createReservation({
      roomId: this.props.room.id,
      guests: FilterStore.params().max_sleep_num,
      guestId: UserStore.currentUser(),
      //TODO may cause errors because dates are in form of moments
      startDate: FilterStore.params().dates.startDate,
      endDate: FilterStore.params().dates.endDate,
      message: this.state.message
    });


  },

  messageHandler: function(message) {
    this.setState({
      message: message
    })
  },

  render: function() {
    // <div>
    //   <div>
    //
    //     <button
    //       type="button"
    //       className="btn btn-warning"
    //       aria-label="Close"
    //       style={{float: "right"}}
    //       onClick={this.closeModal}
    //       disabled={isDisabled}>
    //       Cancel
    //     </button>
    //     <Modal.Title id="RsvpModalHeader">Confirm Your Request</Modal.Title>
    //
    //     <div className="container-fluid">
    //       <div className="col-xs-12 col-md-7">
    //         <form
    //           className="input-group col-xs-12"
    //           onSubmit={this.handleSubmit}>
    //           <div className="row">
    //             <div className="payment-container">
    //               <h3>Payment</h3>
    //               <div className="form-group col-xs-6">
    //                 <label htmlFor="payment-method">Payment Method</label>
    //                 <select
    //                   className="form-control"
    //                   id="payment-method"
    //                   disabled={isDisabled}>
    //                   <option>VISA xxxxxxxxxx6503</option>
    //                   <option>MASTERCARD xxxxxxxxxx5709</option>
    //                 </select>
    //               </div>
    //             </div>
    //           </div>
    //
    //           <div className="row">
    //             <h3>Introduce Yourself to {room.host.username}</h3>
    //             <p>Giving your host more information will make them more likely to confirm your booking request:</p>
    //             <div className="row">
    //               <div className="col-xs-2 no-padding-right">
    //                 <img
    //                   className="img-responsive img-circle"
    //                   src={hostPicUrl} />
    //               </div>
    //               <div className="col-xs-10 no-padding-left">
    //                 <ul>
    //                   <li>Tell {room.host.username} a little about yourself</li>
    //                   <li>What brings you to {room.city}? Who’s joining you?</li>
    //                   <li>What do you love about this listing? Mention it!</li>
    //                 </ul>
    //               </div>
    //             </div>
    //           </div>
    //
    //
    //           <div className="row row-space-3">
    //             <div className="input-group col-xs-12">
    //               <textarea
    //                 className="form-control"
    //                 rows="5"
    //                 placeholder="Message your host..."
    //                 valueLink={this.linkState("message")}
    //                 disabled={isDisabled}>
    //               </textarea>
    //             </div>
    //           </div>
    //
    //           <div className="row">
    //             <div className="col-xs-12">
    //               <div className="row">
    //                 <div className="checkbox">
    //                   <label>
    //                     <input
    //                       type="checkbox"
    //                       value="agreement"
    //                       required
    //                       title="Before booking agree to the House Rules and Terms."
    //                       disabled={isDisabled}>
    //                     </input>
    //                     I agree to the House Rules, Cancellation Policy, and to the Guest Refund Policy. I also agree to pay the total amount shown, which includes Occupancy Taxes and Service Fees.
    //                   </label>
    //                 </div>
    //               </div>
    //               <div className="row">
    //                 <button
    //                   type="submit"
    //                   className="btn btn-primary center-block"
    //                   disabled={isDisabled}>
    //                   {isDisabled ? "Processing..." : "Confirm Booking"}
    //                 </button>
    //               </div>
    //             </div>
    //           </div>
    //         </form>
    //       </div>
    //
    //       <div className="col-xs-12 col-md-offset-1 col-md-4">
    //         <div className="row">
    //           <img
    //             className="img-thumbnail"
    //             src={roomPicUrl} />
    //         </div>
    //         <div className="row">
    //           <h4>{room.title}</h4>
    //           <p>{room.city}</p>
    //         </div>
    //         <div className="row">
    //           <p>
    //             <strong>{room.type_string}</strong>
    //             {" for "}
    //             <strong>{guests + (guests === "1" ? " guest" : " guests")}</strong>
    //           </p>
    //           <p>
    //             {"From "}
    //             <strong>
    //               {moment(dates.checkin, 'MM-DD-YYYY').format('ddd, MMM DD, YYYY')}
    //             </strong>
    //             {" to "}
    //             <strong>
    //               {moment(dates.checkout, 'MM-DD-YYYY').format('ddd, MMM DD, YYYY')}
    //             </strong>
    //           </p>
    //         </div>
    //         <div className="row">
    //           <table className="table">
    //             <tbody>
    //               <tr>
    //                 <td>
    //                   {"$" + room.price + " × " + nightsStr }
    //                 </td>
    //                 <td>
    //                   {"$" + room.price * nights}
    //                 </td>
    //               </tr>
    //               <tr>
    //                 <td>
    //                   Cleaning fee
    //                 </td>
    //                 <td>
    //                   {"$" + cleaningFee}
    //                 </td>
    //               </tr>
    //               <tr>
    //                 <td>
    //                   Service fee
    //                 </td>
    //                 <td>
    //                   {"$" + serviceFee}
    //                 </td>
    //               </tr>
    //               <tr>
    //                 <td>
    //                   Occupancy Taxes
    //                 </td>
    //                 <td>
    //                   {"$" + Math.floor(room.price*nights*taxes)}
    //                 </td>
    //               </tr>
    //               <tr>
    //                 <td>
    //                   Total
    //                 </td>
    //                 <td>
    //                   {"$" + (room.price*nights + cleaningFee + serviceFee + Math.floor(room.price*nights*taxesP))}
    //                 </td>
    //               </tr>
    //             </tbody>
    //           </table>
    //         </div>
    //
    //       </div>
    //
    //
    //
    //     </div>

    // var roomID = this.props.
    var nights = FilterStore.params().dates.endDate.diff(FilterStore.params().dates.startDate, 'days');
    var room = this.props.room;
    var cleaningFee = 300;
    var serviceFee = 200;
    var taxes = 0.8;
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
                  <label htmlFor="payment-method">Payment Method</label>
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
                  <ul>
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
                    className="registration-form-submit-button">
                    Submit
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
                    Cleaning fee
                  </td>
                  <td>
                    {"$" + 300}
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
                    {"$" + (room.price*nights + cleaningFee + serviceFee + Math.floor(room.price*nights*taxes))}
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

//
