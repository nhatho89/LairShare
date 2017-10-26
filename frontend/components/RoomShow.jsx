var React = require('react');
var ReactDOM = require('react-dom');
var RoomStore = require('../stores/roomStore');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var RoomDetail = require('./roomDetails.jsx');
var Map = require('./Map');
var ApiUtil = require('../util/apiUtil');
var Carousel = require('nuka-carousel');
var Modal = require('react-modal');
var SessionStore = require('../stores/sessionStore');
var LoginForm = require('./navbarComponents/loginForm');
var authModalStyle = require('./navbarComponents/authModalStyle.jsx');
var ReservationForm = require('./reservationForm.jsx');
var History = require('react-router').History;
var Date = require('./searchComponents/filterComponents/dates.jsx');
var SessionActions = require('../actions/sessionAction.js');
var modalStyle = require('./modalStyle');


var PropTypes = React.PropTypes;

var RoomShow = React.createClass({
  mixins: [Carousel.ControllerMixin],
  mixins: [History],

  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState: function () {
    var roomId = this.props.params.roomId;
    var room = RoomStore.find(roomId) || {};
    
    return ({
      room: room,
      showSigninModal: false,
      showModal: false,
      signedIn: false,
      centerLatLng: {lat: room.lat, lng: room.lng}
    });
  },

  componentDidMount: function () {
    this.addScrollFollow();
    this.sessionListener = SessionStore.addListener(this.sessionChange);
    this.roomListener = RoomStore.addListener(this._roomChanged);
    ApiUtil.fetchARoom(this.props.params.roomId);
  },
  componentWillUnmount: function () {
    this.roomListener.remove();
    this.sessionListener.remove();
    $(window).off('scroll', this.scrollListener);
  },

  sessionChange: function() {
    this.setState({
      signedIn: true
    })
  },

  _roomChanged: function () {

    var roomId = this.props.params.roomId;
    var room = RoomStore.find(roomId);
    this.setState({
      room: room,
      centerLatLng: {lat: room.lat, lng: room.lng}
    });
  },

  reservationClick: function() {
    this.props.history.pushState(null, "reservation/" + room.id);
  },

  openModal: function() {
    this.setState({showModal: true})
  },

  closeModal: function() {
    this.setState({showModal: false})

  },

  openSigninModal: function() {
    this.setState({showSigninModal: true})
  },

  closeSigninModal: function() {
    this.setState({showSigninModal: false})
  },

  scrollListener: function() {
    var element = $('.map-reserve-container');
    var roomShowEl = $('.room-show-content-container').offset().top,
      topPos,
      navBar = $('#navbar').offset().top;
    if (roomShowEl - 67 <= navBar) {
      element.css('position', 'fixed');
      element.css('top', 67);
    } else {
      topPos = 67;
      element.css('top', 0);
      element.css('position', 'relative');
    }
  },

  addScrollFollow: function() {
    $(window).on('scroll', this.scrollListener );
  },

  _renderCarousel: function() {
    let roomPics;
    let carousel;

    if (this.state.room.pics) {
      roomPics = this.state.room.pics;

      carousel = (
        <Carousel>
          <img className="carousel-pic" src={roomPics[0].pic_url}/>
          <img className="carousel-pic" src={roomPics[1].pic_url}/>
          <img className="carousel-pic" src={roomPics[2].pic_url}/>
          <img className="carousel-pic" src={roomPics[3].pic_url}/>
        </Carousel>
        )
      } else {
        carousel = "";
      }
      return carousel;
  },

  _renderSignInModal: function() {
    return (
      <Modal
        isOpen={this.state.showSigninModal}
        onRequestClose={this.closeSigninModal}
        closeTimeoutMS={0}
        style={authModalStyle}>
        <LoginForm closeModal={this.closeSigninModal}/>
      </Modal>
    )
  },

  _renderLeftContainer: function() {
    return (
      <div className="left-half-room">
        <div className="room-details-container">
          <RoomDetail openSigninModal={this.openSigninModal} room={this.state.room} />
        </div>
      </div>
    );
  },

  _renderRightContainer: function() {
    var button;
    if (SessionStore.currentUser().username) {
      button = (
        <button className="reserve-lair-button" onClick={this.openModal}>Reserve Lair!</button>
      ) } else {
        button = (
        <button className="reserve-lair-button" onClick={this.openSigninModal}>Sign In to Reserve!</button>
        )
    }

    let rooms = [];
    let centerLatLng;
    if (this.state.room) {
      rooms.push(this.state.room);
      centerLatLng = {lat: this.state.room.lat, lng: this.state.room.lng}
    }

    return (
      <div className="right-half-room">
        <Modal
          room={this.state.room}
          isOpen={this.state.showModal}
          onRequestClose={this.closeModal}
          closeTimeoutMS={0}
          style={modalStyle}>
          <ReservationForm room={this.state.room}/>
        </Modal>

        <div className="map-reserve-container">
          <div className="room-show-price">
            <div className="room-show-price-text">
              <p>${this.state.room.price} per Night</p>

            </div>
          </div>
          <div className="date-container">
            <Date
              guestNeeded={false}
              />
          </div>
          <div className="reserve-lair-button-container">
            {button}
          </div>
          <div id="room-show-gmap">
            <Map
              centerLatLng={centerLatLng}
              singleRoom={true}
              rooms={rooms}/>
          </div>

        </div>
      </div>
    )
  },

  render: function () {
    return (
      <div className="carousel-container">
        {this._renderCarousel()}
        {this._renderSignInModal()}
        <div className="room-show-content-container">
          {this._renderLeftContainer()}
          {this._renderRightContainer()}
        </div>
      </div>
    );
  }
});

module.exports = RoomShow;
