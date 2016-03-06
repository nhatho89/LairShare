var React = require('react');
var ReactRouter = require('react-router');
var RoomStore = require('../stores/roomStore.js');
var FilterStore = require('../stores/filter_params.js');
var RoomActions = require('../actions/roomAction.jsx');
var FilterActions = require('../actions/filter_actions.js')
var History = require('react-router').History;

var List = require('./list.jsx');
var Map = require('./Map.jsx');
var LoadingScreen = require('./loadingScreen.jsx');
var Filter = require('./Filters.jsx');
var Search = require('./Search.jsx');
var ApiUtil = require('../util/apiUtil.js');
var Index = require('./Index');
var Link = require('react-router').Link;

var SearchIndex = React.createClass({
  mixins: [History],


  getInitialState: function() {
    return({
      rooms: RoomStore.all(),
      filterParams: FilterStore.params(),
      showResult: false,
      centerLatLng: null
    });
  },


  _updateRooms: function() {
    this.setState({
      rooms: RoomStore.all()
    });
  },


  _updateMapsStatus: function() {

      this._startSearchProcess();

  },

  _startSearchProcess: function() {
    this._geoConverter(this.props.params.loc);
  },


  _geoConverter: function(locStr) {
    this.geocoder = new google.maps.Geocoder();
    var _showMaps = this._showMaps;
    this.geocoder.geocode({"address": locStr}, function(results, status){
      if (status === google.maps.GeocoderStatus.OK) {
        var latLng = {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng()
        };

        _showMaps(latLng);
      }
    });
  },

  _filtersChanged: function () {
    var newParams = FilterStore.params();
    this.setState({ filterParams: newParams });
    ApiUtil.fetchAllRooms();

  },

  _showMaps: function(centerLatLng) {

    this.setState({
      showResult: true,
      centerLatLng: centerLatLng
    });
  },

  componentWillReceiveProps: function(newProps) {

    var newLocStr = newProps.params.loc;

    this._geoConverter(newProps.params.loc);
  },

  componentWillUnmount: function() {
    this.roomToken.remove();
    this.filterListener.remove();

  },

  componentDidMount: function() {
    this.currentLocStr = this.props.params.loc;

      this._startSearchProcess();
    this.roomToken = RoomStore.addListener(this._updateRooms);
    ApiUtil.fetchAllRooms();
    this.filterListener = FilterStore.addListener(this._filtersChanged);

  },


  handleMarkerClick: function (room) {
    this.props.history.pushState(null, "rooms/" + room.id);
  },

  render: function() {

    var showResult = this.state.showResult;
    var redirect;

      if (Object.keys(this.state.rooms).length === 0) {

      redirect = (
        <div>
          <h4>
            This demo only contains data for
            <Link to="/search/San-Francisco">
              &nbsp;San Francisco
            </Link>
          </h4>
        </div>

      )} else {
        redirect =  (

          <div></div>
        )
      }


    if (showResult) {
      return (
        <div className="search-container">
          <div className="left-half">
            <div className="row">
              <Filter rooms={this.state.rooms} filterParams={this.state.filterParams}/>
            </div>
            <div className="search-list-result" >
              <Index rooms={this.state.rooms} history={this.props.history} />
              {redirect}
            </div>
          </div>
          <div className="right-half">
            <Map
              centerLatLng={this.state.centerLatLng}
              onMarkerClick={this.handleMarkerClick}/>

          </div>
        </div>
      );
    } else {
      return (
      <div>
      </div>
    )}
  }
});

module.exports = SearchIndex;
