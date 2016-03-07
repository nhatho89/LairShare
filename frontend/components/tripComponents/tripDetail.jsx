var React = require('react');
var TripStore = require('../../stores/tripStore.js');

var TripDetail = React.createClass({
  getInitialState: function() {
    //this.props is empty

    return ({
      trip: TripStore.find_by_id(parseInt(this.props.tripId))
    });
  },

  componentWillReceiveProps: function(newProps) {
    this.setState({
      trip: TripStore.find_by_id(parseInt(newProps.tripId))
    });
  },



  render: function() {

    var trip = this.state.trip
    if(typeof trip === 'undefined' || trip === null ) return null;
    // var img_url = "https://res.cloudinary.com/chenjm8683/image/upload/c_scale,w_250"
    //  + trip.room_pic;
    var checkinStr = moment(trip.startDate, 'MM-DD-YYYY').format('ddd, MMM DD, YYYY');
    var checkoutStr = moment(trip.endDate, 'MM-DD-YYYY').format('ddd, MMM DD, YYYY');
    var nights = TripStore.nights(trip.id);
    var ppn = trip.price;
    var cleaningFee = 300;
    var serviceFee = 200;
    var taxes = 0.1;

    return (
      <div className="trip-detail-container">
        <div className="row">
          <div className="col-md-4">
            <div className="row">
              <div className="col-xs-12">
                <h4><strong>Check In</strong></h4>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <p>
                  <strong>{checkinStr}</strong>
                  <br />Flexible check in time
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="row">
              <div className="col-xs-12">
                <h4><strong>Check Out</strong></h4>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <p>
                  <strong>{checkoutStr}</strong>
                  <br />Flexible check out time
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2 center">
            <div className="row">
              <div className="col-xs-12">
                <h4><strong>{nights > 1 ? "Nights" : "Night"}</strong></h4>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <p><strong>{nights}</strong></p>
              </div>
            </div>
          </div>
          <div className="col-md-2 center">
            <div className="row">
              <div className="col-xs-12">
                <h4><strong>{trip.guests > 1 ? "Guests" : "Guest"}</strong></h4>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <p><strong>{trip.guests}</strong></p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <h4>
              <a href={"#/rooms/" + trip.id}>
                <strong>{trip.title}</strong>
              </a>
            </h4>
            <p>{trip.location}</p>
            <p>
              {"Host name: " + trip.host_fname}
              <br />
              <span className="glyphicon glyphicon-earphone" ariaHidden="true"></span>
              {" (917)456-7890"}
            </p>
          </div>
          <div className="col-md-6">
            <div className="trip-item-image">
              INSERT PICTURE HERE!
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <h4><strong>Receipt</strong></h4>
          </div>
          <div className="col-xs-12 col-md-offset-3 col-md-6">
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    {"$" + ppn + " per night × " + nights + (nights > 1 ? "nights" : "night")}
                  </td>
                  <td>
                    {"$" + ppn*nights}
                  </td>
                </tr>
                <tr>
                  <td>
                    Cleaning fee
                  </td>
                  <td>
                    {"$" + cleaningFee}
                  </td>
                </tr>
                <tr>
                  <td>
                    Service fee
                  </td>
                  <td>
                    {"$" + serviceFee}
                  </td>
                </tr>
                <tr>
                  <td>
                    Occupancy Taxes
                  </td>
                  <td>
                    {"$" + Math.floor(ppn*nights*taxes)}
                  </td>
                </tr>
                <tr  style={{borderBottom: "2px solid #ddd"}}>
                  <td>
                    Total
                  </td>
                  <td>
                    {"$" + (ppn*nights + cleaningFee + serviceFee + Math.floor(ppn*nights*taxes))}
                  </td>
                </tr>
                <tr>
                  <td>
                    Credit Card
                  </td>
                  <td>
                    VISA xxxxxxxxxx6503
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

module.exports = TripDetail;
