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
          <div className="col-xs-12">
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
                  <strong>{"1"}</strong>
                </p>

                <p>{"Bed type: "}
                  <strong>{"Real Bed"}</strong>
                </p>
              </div>
              <div className="inner-list-one">
                <p>{"Property type: "}
                  <strong>Lair</strong>
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
                  <strong>{" Plutonium"}</strong>
                </p>
                <p>
                  <img src="/assets/icons/signs.png"></img>
                  <strong>{" BioWeapon"}</strong>
                </p>
              </div>

              <div className="inner-list-one">

                <p>
                  {'IMAGE'}
                  <strong>{" Essentials"}</strong>
                </p>
                <p>
                  {'IMAGE'}
                </p>
                <p>
                  {'IMAGE'}
                  <strong>{" Washer"}</strong>
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
                  <strong>{"$30"}</strong>
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

        <div className="row">
          <div className="col-md-3 text-muted">
            <p>House Rules</p>
          </div>
          <div className="detail-outer-container">
            <div className="detail-inner-container-custom">
              <div  className="inner-list-one">
                <p>General courtesy</p>
                <p>No extra overnight guests</p>
                <p>No smoking inside the building</p>
                <p>Please clean up after yourself</p>
              </div>
            </div>
          </div>
        </div>

        <hr/>

        <div className="row">
          <div className="col-md-3 text-muted">
            <p>Safety Features</p>
          </div>
          <div className="detail-outer-container">
            <div className="detail-inner-container">
              <div className="inner-list-one">
                <p>Smoke Detector</p>
                <p>Safety Card</p>
                <p>Carbon Monoxide Detector</p>
              </div>
              <div className="inner-list-one">
                <p>First Aid Kit</p>
                <p>Fire Extinguisher</p>
              </div>
            </div>
          </div>
        </div>

        <hr/>

        <div className="row">
          <div className="col-md-3 text-muted">
            <p>Availability</p>
          </div>
          <div className="detail-outer-container">
            <div className="detail-inner-container">
              <div className="inner-list-one">
                <p><strong>3</strong> nights minimum stay</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
});

module.exports = RoomDetails;
