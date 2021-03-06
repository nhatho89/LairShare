var React = require('react');
var RoomStore = require('../../stores/roomStore.js');
var RoomAction = require('../../actions/roomAction.jsx');

var TripStore = require('../../stores/tripStore.js');
var TripAction = require('../../actions/tripAction.js');

var TripList = require('./tripList.jsx');
var TripDetail = require('./tripDetail.jsx');

var UserIndex = React.createClass({

  getInitialState: function() {
    var roomId = this.props.params.id;
    var room = RoomStore.find(roomId);
    this.tabs = [
      "All Trips",
      "Current",
      "Upcoming",
      "Past"
    ];
    return({
      activeTabId: 0,
      activeTripId: 1,
      trips: TripStore.all()
    });
  },

  receiveTrips: function() {
    this.setState({
      trips: TripStore.all()
    });
  },

  toggleTab: function(e) {
    e.preventDefault();
    var clickedTabName = e.target.innerHTML;
    var clickedTabId = this.tabs.indexOf(clickedTabName);
    if (clickedTabId !== this.state.activeTabId) {
      this.setState({
        activeTabId: clickedTabId,
        trips: TripStore.getTripsInCategory(clickedTabName.toLowerCase())
      });
    }
  },

  componentWillUnmount: function() {
    this.tripToken.remove();
  },

  showTripDetail: function(tripId) {
    this.setState({
      activeTripId: tripId
    })
  },

  componentWillReceiveProps: function(newProps) {
    this.setState({
      activeTripId: newProps.params.tripId
    });
  },

  componentDidMount: function() {
    this.tripToken = TripStore.addListener(this.receiveTrips);
    TripAction.fetchUserTrips();
  },

  highlightTripId: function(tripId) {
    this.setState({
      activeTripId: tripId
    });
  },

  render: function() {
    var activeTabId = this.state.activeTabId;

    return (
      <div className="user-trip-index-outer-container">
        <div className="user-trip-outer-container">
          <ul
            className="user-trip-categories"
            onClick={this.toggleTab}>
            <li
              className={activeTabId === 0 ? "active" : "inactive-tab"}
              id="tabs">
              {this.tabs[0]}
            </li>
            <li className={activeTabId === 1 ? "active" : "inactive-tab"}
              id="tabs">
              {this.tabs[1]}
            </li>
            <li className={activeTabId === 2 ? "active" : "inactive-tab"}
              id="tabs">
              {this.tabs[2]}
            </li>
            <li className={activeTabId === 3 ? "active" : "inactive-tab"}
              id="tabs">
              {this.tabs[3]}
            </li>
          </ul>
        </div>

        <div className="trip-item-and-detail active-background" >
          <div className="trip-list-panel">
            <div>
              <div>
                <TripList
                  highlightTripId={this.highlightTripId}
                  trips={this.state.trips}
                  history={this.props.history}
                  tabName={this.tabs[this.state.activeTabId]}
                  activeTripId={this.state.activeTripId}/>
              </div>
            </div>
          </div>
          <div className="trip-detail-panel">

            {this.state.activeTripId ? <TripDetail tripId={this.state.activeTripId}/> : ""}
          </div>
        </div>
      </div>
    );
  }


});

module.exports = UserIndex;
