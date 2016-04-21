var React = require('react');
var RoomStore = require('../../stores/roomStore.js');

var LairShareMedia = React.createClass({

  render: function() {

    var drEvilPic = (<img className="quote-picture" src='/assets/drEvil.jpg'></img>)
    var heisenbergPic = (<img className="quote-picture" src='/assets/heisenberg.jpg'></img>)

    return (
      <div className="lair-share-media">
        <div className="col-wrap">

          <div className="quote-container">
            <div className="quote-text">
              <p>
                "LairShare is the best thing that ever happened to me. I can now take my work AND vacations together!"
              </p>
            </div>
            <div className="quote-left">
              <div className="quote-author">
                <h3>
                  -- Dr. Evil
                </h3>
              </div>
              <div className="quote-image">

                {drEvilPic}
              </div>
            </div>
          </div>

          <div className="quote-container">
            <div className="quote-text">
              <p>
                "LairShare is fast, reliable and overall awesome! If you're planning to break bad, use LairShare!"
              </p>
            </div>
            <div className="quote-left">
              <div className="quote-author">
                <h3>
                  -- Heisenberg
                </h3>
              </div>
              <div className="quote-image">

                {heisenbergPic}
              </div>
            </div>
          </div>

        </div>


      </div>
    );
  }

});

module.exports = LairShareMedia;
