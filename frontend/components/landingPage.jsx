var React = require('react');
var LandingSearchBar = require('./landingPageComponents/landingSearchBar.jsx');


var LandingPage = React.createClass({


  // <LandingSearchBar/>

  render: function() {
    return (
      <div className="landing-page">
        <div className="container-title">
          <div className="title">
            <h1>WELCOME HOME</h1>
            <h4>Rent from or share secret lairs with Super Villains across the world!!</h4>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = LandingPage;

//Share your lair with supervillains...
