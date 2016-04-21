var React = require('react');
var History = require('react-router').History;


var NavBarLeft = React.createClass({
  mixins: [History],

  scrollToExplore: function() {
    var element = document.getElementById("explore-container");
    if (element) {
      element.scrollIntoView({block: "end", behavior: "smooth"});
    } else {
      this.history.push({pathname: "/#"});
    }
  },

  render: function() {


    return (
      <div className="navbar-left">
        <ul>
          <li className="absolute-logo"><a href="/#"><img className="lairshare-logo" src="/assets/lairshare_logo.png"></img></a></li>
          <div className="explore-dropdown">
            <p className="explore-dropdown" id="explore-dropdown-text" onClick={this.scrollToExplore}>Explore</p>
            <div className="dropdown-content">
              <a className="logo" href="/#/search/San-Francisco">San Francisco</a>
              <a className="logo" href="/#/search/New-York-City">New York</a>
              <a className="logo" href="/#/search/Saint-Martin">Caribbean</a>
            </div>
          </div>
        </ul>
      </div>
    );
  }

});

module.exports = NavBarLeft;
