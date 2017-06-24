var React = require('react');
var SearchBar = require('./landingPageComponents/searchBar.jsx');
var DatePicker = require('react-datepicker');
var Explore = require('./landingPageComponents/explore.jsx');
var Footer = require('./footerComponents/footer.jsx');
var LairShareMedia = require('./landingPageComponents/lairShareMedia');

var LandingPage = React.createClass({

  componentDidMount: function() {
    $('#navbar').removeClass('morph')
    this.addScrollFollow();
  },

  addScrollFollow: function() {
    window.addEventListener('scroll', this.scrollListener);
  },

  componentWillUnmount: function() {
    $('#navbar').addClass('morph')
    window.removeEventListener('scroll', this.scrollListener);
  },

  scrollListener: function() {
    var element = $('#navbar').offset().top;

      var el = document.getElementById('navbar');
      if (150 <= element) {
        $('#navbar').addClass('morph')
      } else {
        $('#navbar').removeClass('morph')
      }
  },

  getInitialState: function() {
    return (
      {startDate: null,
      endDate: null}
    )
  },

  render: function() {
    return (
      <div className="landing-page" id="landing-page">
        <div className="landing-page-wrapper">
          <div className="landing-page-background-container">
            <div className="container-title">
              <video id="landing-video" src="http://res.cloudinary.com/dxqtuwks5/video/upload/v1471303546/LairShareFast_pwhoj2.mp4" autoPlay loop muted>
              </video>
              <h1 id="subtitle">WELCOME HOME</h1>
              <h4>Rent secret lairs from other super villains to expand your vicinity of chaos!!</h4>
            </div>
            <SearchBar/>
          </div>
        </div>

        <div className="explore-landing-page" id="explore-container">
          <Explore/>
        </div>

        <div className="media" id="media-container">
          <LairShareMedia/>
        </div>

        <div className="footer" id="bottom-container">
          <Footer/>
        </div>

      </div>
    );
  }
});

module.exports = LandingPage;
