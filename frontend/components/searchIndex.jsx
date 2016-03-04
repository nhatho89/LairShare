var React = require('react');
var ReactRouter = require('react-router');
var RoomStore = require('../stores/roomStore.js');
var FilterStore = require('../stores/filter_params.js');
var RoomActions = require('../actions/roomAction.jsx');
var FilterActions = require('../actions/filter_actions.js')
// var SearchForm = require('./searchForm.jsx');
var History = require('react-router').History;

var List = require('./list.jsx');
var Map = require('./Map.jsx');
var JSLoaderStore = require('../stores/jsLoaderStore.js');
var LoadingScreen = require('./loadingScreen.jsx');
var Filter = require('./Filters.jsx');
var Search = require('./Search.jsx');


var SearchIndex = React.createClass({
  // mixins: [ReactRouter.history],
  mixins: [History],


  getInitialState: function() {
    return({
      rooms: RoomStore.all(),
      latLng: null,
      // filterParams: FilterStore.params(),
      // showResult: JSLoaderStore.isReady('gMaps')
      showResult: false
    });
  },


  _updateRooms: function() {
    this.setState({
      rooms: RoomStore.all()
    });
    // debugger;
  },

  // _updateFilter: function() {
  //
  //   RoomActions.fetchAllRooms();
  // },

  _updateMapsStatus: function() {
    if (JSLoaderStore.isReady('gMaps')) {
      // no need to receive further GMapsLib loading status as already loaded.
      this.mapsReadyToken.remove();
      this._startSearchProcess();
    }
  },

  _startSearchProcess: function() {
    this._geoConverter(this.props.params.loc);
  },


  _geoConverter: function(locStr) {

    if (locStr === "San-Francisco" || locStr === "san-francisco") {
      this.history.push({pathname: 'rooms'});
    };
    this.geocoder = new google.maps.Geocoder();
    // console.log("geoConverter called");
    var _showMaps = this._showMaps;
    this.geocoder.geocode({"address": locStr}, function(results, status){
      if (status === google.maps.GeocoderStatus.OK) {
        // this will be used as the center of google maps
        var latLng = {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng()
        };
        // console.log(latLng);
        _showMaps(latLng);
      } else {
        // here to handle failed search
        // console.log('Geocode was not successful for the following reason: ' + status);
      }
    });
  },

  _showMaps: function(centerLatLng) {
    this.setState({
      showResult: true,
      centerLatLng: centerLatLng
    });
  },

  componentWillReceiveProps: function(newProps) {
    var newLocStr = newProps.params.loc;
    // console.log("searchIndexReceivedNewProps" + newLocStr);
    // debugger;
    // if the new loc string is the same, do nothing
    // if (this.currentLocStr !== newLocStr) {
      this._geoConverter(newProps.params.loc);
    // }
  },

  componentWillUnmount: function() {
    this.roomToken.remove();
    // this.filterToken.remove();
  },

  componentDidMount: function() {
    this.currentLocStr = this.props.params.loc;
    // console.log('searchIndexmounted' + this.currentLocStr);
    // run map-related search immediately if GMapsLib is loaded,
    // or listen to change of loading status from the JSLoaderStore
    if (JSLoaderStore.isReady('gMaps')) {
      this._startSearchProcess();
    } else {
      this.mapsReadyToken = JSLoaderStore.addListener(this._updateMapsStatus);
    }
    this.roomToken = RoomStore.addListener(this._updateRooms);
    // this.filterToken = FilterStore.addListener(this._updateFilter);

    // RoomActions.fetchCurrentMapRooms();
  },

  handleClick: function(e) {
    e.preventDefault();
    this.history.push({pathname: 'rooms/'});
  },

  render: function() {

    var showResult = this.state.showResult;
    // // For testing
    // showResult = false;
    // console.log(this.props.params.loc);
    // // For testing

    if (showResult) {
      // console.log("searchIndexRendered");
      return (
        <div className="search-container">
          <div className="left-half">
            <div className="row">
              <h2 style={{display: "none"}}>Search Filter Placeholder</h2>
              <Filter/>
            </div>
            <div className="row search-list-result" >
              <h2 style={{display: "none"}}>Search Result Header Placeholder</h2>
                <h4>
                  This Demo system currently only contains sample room data in
                  <a onClick={this.handleClick}>
                    {" San Francisco"}
                  </a>
                </h4>
               </div>
          </div>
          <div className="right-half">
            <Map centerLatLng={this.state.centerLatLng}/>
          </div>
        </div>
      );
    } else {
      return(
        <LoadingScreen />
      );
    }
  }
});

module.exports = SearchIndex;
