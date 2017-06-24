var React = require('react');
var ReactRouter = require('react-router');
var RoomStore = require('../../stores/roomStore.js');
var FilterStore = require('../../stores/filter_params.js');
var RoomActions = require('../../actions/roomAction.jsx');
var FilterActions = require('../../actions/filter_actions.js')
var History = require('react-router').History;

var Map = require('../Map.jsx');
var Filter = require('./Filters.jsx');
var ApiUtil = require('../../util/apiUtil.js');
var Index = require('./Index');
var Link = require('react-router').Link;

var SearchIndex = React.createClass({
  mixins: [History],

  getInitialState() {
    return({
      rooms: RoomStore.all(),
      filterParams: FilterStore.params(),
      showResult: false,
      centerLatLng: null
    });
  },

  _updateRooms() {
    this.setState({
      rooms: RoomStore.all()
    });
  },

  _updateMapsStatus() {
      this._startSearchProcess();
  },

  _startSearchProcess() {
    this._geoConverter(this.props.params.loc);
  },

  _geoConverter(locStr) {
    this.geocoder = new google.maps.Geocoder();
    var _showMaps = this._showMaps;
    this.geocoder.geocode({"address": locStr}, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        var latLng = {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng()
        };
        _showMaps(latLng);
      }
    });
  },

  _filtersChanged() {
    var newParams = FilterStore.params();
    this.setState({ filterParams: newParams });
    ApiUtil.fetchAllRooms();
  },

  _showMaps(centerLatLng) {
    this.setState({
      showResult: true,
      centerLatLng: centerLatLng
    });
  },

  componentWillReceiveProps(newProps) {
    var newLocStr = newProps.params.loc;
    this._geoConverter(newProps.params.loc);
  },

  componentWillUnmount() {
    this.roomToken.remove();
    this.filterListener.remove();
  },

  componentDidMount() {
    this.currentLocStr = this.props.params.loc;
    this._startSearchProcess();
    this.roomToken = RoomStore.addListener(this._updateRooms);
    ApiUtil.fetchAllRooms();
    this.filterListener = FilterStore.addListener(this._filtersChanged);
  },

  handleMarkerClick(room) {
    this.props.history.pushState(null, "rooms/" + room.id);
  },

  _renderDefaultIndex() {
    if (Object.keys(this.state.rooms).length === 0) {
    return (
      <div className="redirect-to-sf">
        <h4>
          Looks like nothing is here, try these:&#13;&#10;
        </h4>
        <Link to="/search/San-Francisco" className="link-to-city">
          &nbsp;&nbsp;San Francisco
        </Link>
        <Link to="/search/New-York-City" className="link-to-city">
          &nbsp;&nbsp;New York City
        </Link>
        <Link to="/search/Saint-Martin" className="link-to-city">
          &nbsp;&nbsp;Caribbean
        </Link>
      </div>

    )} else {
      return null;
    }
  },

  render() {
    const redirect = this._renderDefaultIndex();

    if (this.state.showResult) {
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
              onMarkerClick={this.handleMarkerClick}
              />
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
