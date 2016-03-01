var React = require('react');
var LandingSearchBar = require('./landingPageComponents/landingSearchBar.jsx');
var DatePicker = require('react-datepicker');

var LandingPage = React.createClass({

  getInitialState: function() {
    // var dates = this.props.filterParams.dates;
    // return ({
    //   checkin: dates.checkin,
    //   checkout: dates.checkout,
    //   dateRange: (dates.checkin === null ? "" : dates.checkin + " - " + dates.checkout)
    return (
      {startDate: null,
      endDate: null}
    )

  },


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
