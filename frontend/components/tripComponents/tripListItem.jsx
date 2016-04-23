var React = require('react');

var TripListItem = React.createClass({

  handleClick: function() {
    this.props.highlightTripId(this.props.trip.id);
  },

  // shouldComponentUpdate : function(newProps){
  //   return this.props.activeTripId !== newProps.activeTripId;
  // },

  componentWilllMount: function() {
    var trip = this.props.trip;
    var className = "list-group-item";
    if(trip.id === this.props.activeTripId) {
      className += " active";
      this.props.highlightTripId(trip.id);
    }
  },

  render: function() {
    var trip = this.props.trip;
    var className = "list-group-item";
    var activeClassName = "";
    // if(trip.id === this.props.activeTripId) {
    //   debugger
    //   var activeClassName = " active";
    // } else {
    //   var activeClassName = "";
    // }
    console.log(this.props.activeTripId);
    return(
      <div onClick={this.handleClick} className={className + activeClassName}>
        <p className="list-group-item-heading">{trip.location + ": " + trip.title}</p>
        <p className="list-group-item-text">{trip.startDate + " - " + trip.endDate}</p>
      </div>
    );
  }

});

module.exports = TripListItem;
