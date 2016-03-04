var React = require('react');
var RoomStore = require('../stores/roomStore.js');
var LoadingScreen = require('./loadingScreen.jsx');
var RoomAction = require('../actions/roomAction.jsx');

var TripStore = require('../stores/tripStore.js');
var TripAction = require('../actions/tripAction.js');

var TripList = require('./tripComponents/tripList.jsx');
var TripDetail = require('./tripComponents/tripDetail.jsx');

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
      activeTripId: null,
      trips: TripStore.all()
    });
  },

  receiveTrips: function() {
    // debugger;
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

  // logoutRedirect: function() {
  //   debugger;
  //   this.props.history.pushState(null, '/');
  // },

  componentWillUnmount: function() {
  //   this.sessionToken.remove();
    this.tripToken.remove();
  },

  showTripDetail: function(tripId) {
    this.setState({
      activeTripId: tripId
    })
  },

  componentWillReceiveProps: function(newProps) {
    // console.log(newProps);
    this.setState({
      activeTripId: newProps.params.tripId
    });
  },

  // componentWillMount: function() {
  //   // check login status; if not logged in, redirect to homepage
  //   // may change to a login page with redirection back to tripIndex upon successful login
  //   if(!SessionStore.hasCurrentUser()) {
  //     debugger;
  //     this.props.history.pushState(null, '/');
  //   }
  // },

  componentDidMount: function() {
  //   this.sessionToken = SessionStore.addListener(this.logoutRedirect);
  //   debugger;
    this.tripToken = TripStore.addListener(this.receiveTrips);
    TripAction.fetchUserTrips();
  },
  highlightTripId: function(tripId) {

    this.setState({
      activeTripId: tripId
    });
  },


  render: function() {

    //TODO this.props.children is null
    var activeTabId = this.state.activeTabId;
    return (
      <div className="container-fluid below-nav fixed-full-screen" id="tidx">
        <div className="user-trip-outer-container">
          <ul
            className="user-trip-categories"
            onClick={this.toggleTab}>
            <li
              className={activeTabId === 0 ? "active" : ""}>
              {this.tabs[0]}
            </li>
            <li className={activeTabId === 1 ? "active" : ""}>
              {this.tabs[1]}
            </li>
            <li className={activeTabId === 2 ? "active" : ""}>
              {this.tabs[2]}
            </li>
            <li className={activeTabId === 3 ? "active" : ""}>
              {this.tabs[3]}
            </li>
          </ul>
        </div>
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
    );
  }


});

module.exports = UserIndex;
