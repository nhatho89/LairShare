var React = require('react');
var RoomStore = require('../stores/roomStore.js');
var FilterStore = require('../stores/filter_params.js');
var ApiUtil = require('../util/apiUtil');
var Filters = require('./Filters');
var Index = require('./Index');
var Map = require('./Map');

function _getAllRooms() {
  return RoomStore.all();
}

function _getFilterParams() {
  return FilterStore.params();
}
var Search = React.createClass({
  // contextTypes: {
  //   router: React.PropTypes.func
  // },
  _roomsChanged: function(){
    this.setState({rooms: _getAllRooms()});
  },
  _filtersChanged: function () {
    var newParams = _getFilterParams();
    this.setState({ filterParams: newParams });
    ApiUtil.fetchAllRooms();

  },
  getInitialState: function(){
    return {
      rooms: _getAllRooms(),
      filterParams: _getFilterParams(),
      clickedLoc: null,
    };
  },
  componentDidMount: function(){

    this.roomListener = RoomStore.addListener(this._roomsChanged);
    this.filterListener = FilterStore.addListener(this._filtersChanged);
    ApiUtil.fetchAllRooms();
  },
  componentWillUnmount: function(){
    this.roomListener.remove();
    this.filterListener.remove();
  },
  // handleMapClick: function(coords){
  //   this.props.history.pushState(null, "rooms/new", coords);
  // },
  handleMarkerClick: function (room) {
    this.props.history.pushState(null, "rooms/" + room.id);
  },
  render: function(){
    return(
      <div className="search-container">
        <div className="left-half">
          <Filters rooms={this.state.rooms} filterParams={this.state.filterParams}/>
          <Index rooms={this.state.rooms} history={this.props.history} />
        </div>
        <div className="right-half">
          <Map
            onMarkerClick={this.handleMarkerClick}
            rooms={this.state.rooms}/>
        </div>
      </div>
    );
  }
});

// onMapClick={this.handleMapClick}
module.exports = Search
