var React = require('react');
var RoomStore = require('../stores/room');
var FilterParamsStore = require('../stores/filter_params');
var ApiUtil = require('../util/apiUtil');
var Filters = require('./Filters');
var Index = require('./Index');
var Map = require('./Map');

function _getAllRooms() {
  return RoomStore.all();
}

function _getFilterParams() {
  return FilterParamsStore.params();
}
var Search = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
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
    this.filterListener = FilterParamsStore.addListener(this._filtersChanged);
    ApiUtil.fetchAllRooms();
  },
  componentWillUnmount: function(){
    this.roomListener.remove();
    this.filterListener.remove();
  },
  handleMapClick: function(coords){
    this.props.history.pushState(null, "rooms/new", coords);
  },
  handleMarkerClick: function (room) {
    this.props.history.pushState(null, "rooms/" + room.id);
  },
  render: function(){
    return(
      <div>
        <h5>Click Map to Add Room!</h5>
        <Map
          onMapClick={this.handleMapClick}
          onMarkerClick={this.handleMarkerClick}
          rooms={this.state.rooms}/>
        <div className="half">
          <Filters rooms={this.state.rooms} filterParams={this.state.filterParams}/>
          <Index rooms={this.state.rooms} history={this.props.history} />
        </div>
      </div>
    );
  }
});

module.exports = Search