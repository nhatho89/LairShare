var React = require('react');
var TripStore = require('../../stores/tripStore.js');
var TripListItem = require('./tripListItem.jsx');
// var TripDetail = require('./tripDetail.jsx');


var TripList = React.createClass({
  getInitialState: function() {
    return({

      tabName: this.props.tabName
    });
  },

  componentWillReceiveProps: function(newProps) {

    this.setState({
      trips: newProps.trips,
      tabName: newProps.tabName
    });
  },

  render: function() {

    var trips = this.props.trips;
    var trip;
    var className = "list-group-item";
    var classNameActive = "list-group-item active"
    var that = this;
    var listItems = Object.keys(trips).map(function(tripId) {
      trip = trips[tripId];
      return(
        <TripListItem
          key={tripId}
          trip={trip}
          activeTripId={that.props.activeTripId}
          history={that.props.history}
          highlightTripId={that.props.highlightTripId}
          />
      );
    });


    return (
      <div className="panel">
        <div className="panel-heading">
          <div className="panel-heading-left">
            {this.state.tabName}

          </div>
          <div className="panel-heading-right">
            {listItems.length}
          </div>

        </div>
        <div className="list-group">
          {listItems}
        </div>
      </div>
    );
  }

});

module.exports = TripList;
