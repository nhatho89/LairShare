var React = require('react');
var ReactDOM = require('react-dom');
var FilterActions = require('../actions/filter_actions');
var RoomStore = require('../stores/roomStore.js');
function _getCoordsObj(latLng) {
  return {
    lat: latLng.lat(),
    lng: latLng.lng()
  };
}

var CENTER = {lat: 37.7758, lng: -122.435};

var Map = React.createClass({

  getInitialState: function() {
    return {
      centerLatLng: this.props.centerLatLng,
      rooms: RoomStore.all()
    }
  },

  setRoom: function() {
    this.setState({
      rooms: RoomStore.all()
    })

    this._onChange();
  },

  componentDidMount: function(){
    this.roomListener = RoomStore.addListener(this.setRoom);
    console.log('map mounted');
    var map = ReactDOM.findDOMNode(this.refs.map);
    var mapOptions = {
      center: this.centerRoomCoords(),
      zoom: 10
    };
    this.map = new google.maps.Map(map, mapOptions);
    this.registerListeners();
    this.markers = [];
    Object.keys(this.state.rooms).forEach(this.createMarkerFromRoom);
  },

  centerRoomCoords: function () {
    if (this.state.centerLatLng) {


      return {
      lat: this.state.centerLatLng.lat,
      lng: this.state.centerLatLng.lng
      }

    } else {
      return CENTER;
    }

  },


  _onChange: function(){
    var rooms = this.state.rooms;
    var toAdd = [], toRemove = this.markers.slice(0);
    var that = this;

    Object.keys(rooms).forEach(function(id, idx){
      var room = that.state.rooms[id];
      var idx = -1;
      for(var i = 0; i < toRemove.length; i++){
        if(toRemove[i].roomId == room.id){
          idx = i;
          break;
        }
      }
      if(idx === -1){
        toAdd.push(room);
      } else {

        toRemove.splice(idx, 1);
      }
    });
    toAdd.forEach(this.createMarkerFromRoom);
    toRemove.forEach(this.removeMarker);



  },

  componentWillReceiveProps: function(newProps) {
    this.setState({
      centerLatLng: newProps.centerLatLng
    })
    this.map.setCenter({lat: newProps.centerLatLng.lat, lng: newProps.centerLatLng.lng });
    this._onChange();

  },

  componentWillUnmount: function(){
    console.log("map UNmounted");
    this.roomListener.remove();
  },
  registerListeners: function(){
    var that = this;
    google.maps.event.addListener(this.map, 'idle', function() {
      var bounds = that.map.getBounds();

      var northEast = _getCoordsObj(bounds.getNorthEast());
      var southWest = _getCoordsObj(bounds.getSouthWest());
      //actually issue the request
      var bounds = {
        northEast: northEast,
        southWest: southWest
      };
      FilterActions.updateBounds(bounds);
    });
    google.maps.event.addListener(this.map, 'click', function(event) {
      var coords = { lat: event.latLng.lat(), lng: event.latLng.lng() };
      that.props.onMapClick(coords);
    });
  },
  createMarkerFromRoom: function (room) {

    var that = this;
    var pos = new google.maps.LatLng(room.lat, room.lng);
    var marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      roomId: room.id
    });
    marker.addListener('click', function () {
      that.props.onMarkerClick(room)
    });
    this.markers.push(marker);
  },

  removeMarker: function(marker){
    for(var i = 0; i < this.markers.length; i++){
      if (this.markers[i].roomId === marker.roomId){
        this.markers[i].setMap(null);
        this.markers.splice(i, 1);
        break;
      }
    }
  },
  render: function(){
    return ( <div className="gmap" ref="map">Map</div>);
  }
});

module.exports = Map;
