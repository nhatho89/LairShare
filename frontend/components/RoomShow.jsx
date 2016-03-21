var React = require('react');
var ReactDOM = require('react-dom');
var RoomStore = require('../stores/roomStore');
var UserStore = require('../stores/userStore.js');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var RoomDetail = require('./roomDetails.jsx');
var Map = require('./Map');
var ApiUtil = require('../util/apiUtil');
var Carousel = require('nuka-carousel');
var Modal = require('react-modal');
var SessionStore = require('../stores/sessionStore');
var LoginForm = require('./loginForm');
// var RoomForm = require('./RoomForm.jsx');
var authModalStyle = require('./authModalStyle.jsx');
var ReservationForm = require('./reservationForm.jsx');
var History = require('react-router').History;
var Date = require('./filterComponents/dates.jsx');
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
    var room = RoomStore.find(roomId) || {} ;
    return ({
      room: room,
      showSigninModal: false,
      showModal: false,
      signedIn: false,
      // singleRoom: true,
      // openConfModal: false,
      centerLatLng: null
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
    // this.scrollFollow().off();
    $(window).off('scroll', this.scrollListener);


  },

  sessionChange: function() {
    //have to setState to force re-rendering of reservation button after sign in
    this.setState({
      signedIn: true
    })
  },

  _roomChanged: function () {

    var roomId = this.props.params.roomId;
    var room = RoomStore.find(roomId);
    this.setState({ room: room });
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
    // debugger
    this.setState({showSigninModal: true})
  },

  closeSigninModal: function() {
    this.setState({showSigninModal: false})
  },

  scrollListener: function() {
    var element = $('.map-reserve-container');
        // originalY = element.offset().top,
        // topMargin = 0;

    element.css('position', 'relative');

      var roomShowEl = $('.room-show-content-container').offset().top,
        scrollTop = $(window).scrollTop(),
        topPos,
        navBar = $('#navbar').offset().top;

      if (roomShowEl <= navBar) {
        topPos = navBar - 540
      } else {
        topPos = 0;
      }


      element.stop(false, false).animate({
        top: topPos
      }, 0);



  },

  addScrollFollow: function() {


    $(window).on('scroll', this.scrollListener );
    // }
  },

  render: function () {

    var Decorators = [{
      component: React.createClass({
        render() {
          return (
            <button
              onClick={this.props.previousSlide}>
              Previous Slide
            </button>
          )
        }
      }),
      position: 'CenterLeft',
      style: {
        padding: 20
      }
    }];



    var button;

    if (SessionStore.currentUser().username) {
      button = (
        <button className="reserve-lair-button" onClick={this.openModal}>Reserve Lair!</button>
      ) } else {
        button = (
        <button className="reserve-lair-button" onClick={this.openSigninModal}>Sign In to Reserve!</button>
        )
    }
    // debugger

    var roomPics;
    var carousel;
    if (this.state.room) {
      var centerLatLng = {lat: this.state.room.lat, lng: this.state.room.lng}
    }


    if (this.state.room.pics) {
      roomPics = this.state.room.pics;

      carousel = (
          <Carousel decorators={Decorators}>
            <img className="carousel-pic" src={roomPics[0].pic_url}/>
            <img className="carousel-pic" src={roomPics[1].pic_url}/>
            <img className="carousel-pic" src={roomPics[2].pic_url}/>
            <img className="carousel-pic" src={roomPics[3].pic_url}/>
          </Carousel>
        )
      } else {

        carousel = "";
      }

    var rooms = [];
    if (this.state.room) {
      rooms.push(this.state.room);

    }



      console.log(this.state.room);

    return (

      <div className="carousel-container">

      {carousel}


      <Modal

        isOpen={this.state.showSigninModal}
        onRequestClose={this.closeSigninModal}
        closeTimeoutMS={0}
        style={authModalStyle}>

        <LoginForm closeModal={this.closeSigninModal}/>

      </Modal>



        <div className="room-show-content-container">
          <div className="left-half-room">

            <div className="room-details-container">
              <RoomDetail room={this.state.room} />
            </div>
          </div>
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
                  <h1>${this.state.room.price} per Night</h1>

                </div>
              </div>
              <div className="date-container">
                <Date/>
              </div>
              <div className="reserve-lair-button-container">

                {button}
              </div>
              <div id="room-show-gmap">

                <Map
                  centerLatLng={centerLatLng}
                  singleRoom={true}
                  rooms={rooms} />
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = RoomShow;
