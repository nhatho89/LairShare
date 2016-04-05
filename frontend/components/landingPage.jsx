var React = require('react');
var SearchBar = require('./landingPageComponents/searchBar.jsx');
var DatePicker = require('react-datepicker');
var Explore = require('./explore.jsx');
var Footer = require('./footer.jsx');
var LairShareMedia = require('./lairShareMedia');

var LandingPage = React.createClass({

  getInitialState: function() {
    return (
      {startDate: null,
      endDate: null}
    )
  },

  render: function() {
    return (
      <div className="landing-page">
        <div className="landing-page-wrapper">
          <div className="landing-page-background-container">
            <img className="landing-page-background-photo" src="/assets/fort-jefferson.jpg"></img>
            <div className="container-title">
              <h1>WELCOME HOME</h1>
              <h4>Rent secret lairs from other super villains to expand your vincinity of chaos!!</h4>
            </div>
            <SearchBar/>
          </div>
        </div>

        <div className="explore-landing-page">
          <Explore/>
        </div>

        <div className="media">
          <LairShareMedia/>
        </div>

        <div className="footer">
          <Footer/>
        </div>

      </div>
    );
  }
});

module.exports = LandingPage;
