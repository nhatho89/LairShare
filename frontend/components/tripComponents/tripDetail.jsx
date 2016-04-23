var React = require('react');
var TripStore = require('../../stores/tripStore.js');
var RoomStore = require('../../stores/roomStore.js');

var TripDetail = React.createClass({
  getInitialState: function() {
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

    var checkinStr = moment(trip.startDate, 'MM-DD-YYYY').format('ddd, MMM DD, YYYY');
    var checkoutStr = moment(trip.endDate, 'MM-DD-YYYY').format('ddd, MMM DD, YYYY');
    var nights = TripStore.nights(trip.id);
    var ppn = trip.price;
    var serviceFee = 200;
    var taxes = 0.1;

    return (
      <div className="trip-detail-container">
        <div className="flex-row">
          <div>
            <div className="row">
              <div className="receipt-filter-detail">
                <h4><strong>Check In</strong></h4>
              </div>
            </div>
            <div className="row">
              <div className="receipt-filter-detail">
                <p>
                  <strong>{checkinStr}</strong>
                  <br />Flexible check in time
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="row">
              <div className="receipt-filter-detail">
                <h4><strong>Check Out</strong></h4>
              </div>
            </div>
            <div className="row">
              <div className="receipt-filter-detail">
                <p>
                  <strong>{checkoutStr}</strong>
                  <br />Flexible check out time
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="row">
              <div className="receipt-filter-detail">
                <h4><strong>{nights > 1 ? "Nights" : "Night"}</strong></h4>
              </div>
            </div>
            <div className="row">
              <div className="receipt-filter-detail">
                <p><strong>{nights}</strong></p>
              </div>
            </div>
          </div>
          <div>
            <div className="row">
              <div className="receipt-filter-detail">
                <h4><strong>{trip.guests > 1 ? "Guests" : "Guest"}</strong></h4>
              </div>
            </div>
            <div className="row">
              <div className="receipt-filter-detail">
                <p><strong>{trip.guests}</strong></p>
              </div>
            </div>
          </div>
        </div>

        <hr/>

        <div className="flex-row">
          <div>
            <h4>
              <a href={"#/rooms/" + trip.roomId}>
                <strong>{trip.title}</strong>
              </a>
            </h4>
            <p>{trip.location}</p>
            <p>
              {"Host name: " + trip.host}
              <br />
              {" (555)555-5555"}
            </p>
          </div>
          <div>
            <div className="trip-item-image">
              <img className="trip-receipt-pic" src={trip.pic}></img>
            </div>
          </div>
        </div>

        <hr/>

        <div className="row">
          <div className="receipt-filter-detail">
            <h4><strong>Receipt</strong></h4>
          </div>
          <div className="receipt-container">

                <div className="receipt-row">
                  <ul>
                    {"$" + ppn + " per night × " + nights + (nights > 1 ? "nights" : "night")}
                  </ul>
                  <ul>
                    {"$" + ppn*nights}
                  </ul>
                </div>
                <div className="receipt-row">
                  <ul>
                    Service fee
                  </ul>
                  <ul>
                    {"$" + serviceFee}
                  </ul>
                </div>
                <div className="receipt-row">
                  <ul>
                    Occupancy Taxes
                  </ul>
                  <ul>
                    {"$" + Math.floor(ppn*nights*taxes)}
                  </ul>
                </div>
                <div className="receipt-row" style={{borderBottom: "2px solid #ddd"}}>
                  <ul>
                    Total
                  </ul>
                  <ul>
                    {"$" + (ppn*nights + serviceFee + Math.floor(ppn*nights*taxes))}
                  </ul>
                </div>
                <div className="receipt-row">
                  <ul>
                    Credit Card
                  </ul>
                  <ul>
                    VISA xxxxxxxxxx6503
                  </ul>
                </div>

          </div>
        </div>
      </div>
    );
  }
});

module.exports = TripDetail;
