var React = require('react');

var RoomDetails = React.createClass({

  // componentDidMount: function() {
  //     debugger
  // },
  render: function() {
    var hostPicture;
    if (this.props.room.host) {
      hostPicture = (<img className="room-show-host-picture" src={this.props.room.host.profile_pic}/>);
      host = (<p>{this.props.room.host.username}</p>);
    } else {
      hostPicture = "";
      host = "";
    }

    var room = this.props.room;
    return (
      <div className="details">

        <div className="room-header-container">
          <div className="room-header-container-left">
            <div className="host-picture-container">
              {hostPicture}
            </div>
            <div className="host-username-container">

              {host}
            </div>

          </div>
          <div className="room-header-info">
            <div className="header-title">
              <h2>{room.title}</h2>
              <p>{room.location}</p>
            </div>

          </div>

          <div className="room-header-icon">
            <div className="room-detail-icon">
              <ul>

              </ul>

              <ul>

              </ul>

              <ul>

              </ul>

            </div>

          </div>

        </div>

        <hr/>

        <h3>About this listing</h3>
        <div className="row">
          <div className="room-show-about-container">
            <br />
            <p>
              {room.description}
            </p>
            <br />
          </div>
        </div>

        <hr/>

        <div className="row">
          <div className="col-md-3 text-muted">
            <p>The Space</p>
          </div>
          <div className="detail-outer-container">
            <div className="detail-inner-container">
              <div className="inner-list-one">

                <p>{"Accommodates: "}
                  <strong>{room.max_sleep_num}</strong>
                </p>
                <p>{"Bathrooms: "}
                  <strong>{"20"}</strong>
                </p>

                <p>{"Bed type: "}
                  <strong>{"Assorted"}</strong>
                </p>
              </div>
              <div className="inner-list-one">
                <p>{"Property type: "}
                  <strong>{"Secret Lair"}</strong>
                </p>
                <p>{"Room type: "}
                  <strong>{room.type}</strong>
                </p>

              </div>
            </div>
          </div>
        </div>

        <hr/>

        <div className="row">
          <div className="col-md-3 text-muted">
            <p>Amenities</p>
          </div>
          <div className="detail-outer-container">
            <div className="detail-inner-container">
              <div className="inner-list-one">

                <p>
                  <img src="/assets/icons/other-1.png"></img>
                  <strong>{" Guns"}</strong>
                </p>
                <p>
                  <img src="/assets/icons/sign.png"></img>
                  <strong>{" BioWeapon"}</strong>
                </p>
                <p>
                  <img src="/assets/icons/signs.png"></img>
                  <strong>{" Plutonium"}</strong>
                </p>
              </div>

              <div className="inner-list-one">

                <p>
                  <img src="/assets/icons/wifi.png"></img>
                  <strong>{" Wifi"}</strong>
                </p>
                <p>

                  <img src="/assets/icons/toiletpaper.png"></img>
                    <strong>{" Essentials"}</strong>
                </p>
                <p>
                  <img src="/assets/icons/drink.png"></img>
                  <strong>{" Breakfast"}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr/>

        <div className="row">
          <div className="col-md-3 text-muted">
            <p>Prices</p>
          </div>
          <div className="detail-outer-container">
            <div className="detail-inner-container">
              <div className="inner-list-one">
                <p>{"Cleaning fee: "}
                  <strong>{"$300"}</strong>
                </p>
                <p>{"Weekly discount: "}
                  <strong>{"0%"}</strong>
                </p>
              </div>
              <div className="inner-list-one">
                <p>{"Cancellation: "}
                  <strong>{"Flexible"}</strong>
                </p>
                <p>{"Monthly discount: "}
                  <strong>{"0%"}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr/>

        <div>
          <div>
            <p>House Rules</p>
          </div>
          <div className="detail-outer-container">
            <div className="detail-inner-container-custom">
              <div className="inner-list-one">
                <p>General courtesy</p>
                <p>No extra guests</p>
                <p>No heroes allowed</p>
                <p>Please take care of facility</p>
              </div>
            </div>
          </div>
        </div>

        <hr/>

        <div>
          <div>
            <p>Safety Features</p>
          </div>
          <div className="detail-outer-container">
            <div className="detail-inner-container">
              <div className="inner-list-one">
                <p>Smoke Detector</p>
                <p>Perimeter Trip Alarms</p>
                <p>Carbon Monoxide Detector</p>
              </div>
              <div className="inner-list-one">
                <p>Air Raid Alert</p>
                <p>Bomb Proof</p>
                <p>Emergency Escape Routes</p>
              </div>
            </div>
          </div>
        </div>

        <hr/>

        <div>
          <div>
            <p>Availability</p>
          </div>
          <div className="detail-outer-container">
            <div className="detail-inner-container">
              <div className="inner-list-one">
                <p>Only available to <strong>supervillains!</strong></p>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
});

module.exports = RoomDetails;
