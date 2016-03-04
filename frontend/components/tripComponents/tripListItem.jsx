var React = require('react');

var TripListItem = React.createClass({

  handleClick: function() {

    // this.history.push({pathname: "users/" + this.props.trip.id});
    // this.props.history.pushState(null, '/users/' + this.props.trip.id);
    this.props.highlightTripId(this.props.trip.id);
  },

  shouldComponentUpdate : function(newProps){
    
    return this.props.activeTripId !== newProps.activeTripId;
  },

  render: function() {
    var trip = this.props.trip;
    var className = "list-group-item";
    // debugger;
    if(trip.id === this.props.activeTripId) {
      className += " active";
    }
    // debugger
    return(

      <div onClick={this.handleClick} className={className}>
        <p className="list-group-item-heading">{trip.location + ": " + trip.title}</p>
        <p className="list-group-item-text">{trip.startDate + " - " + trip.endDate}</p>
      </div>
    );
  }

});

module.exports = TripListItem;
