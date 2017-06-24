var React = require('react');
var History = require('react-router').History;


var NavBarLeft = React.createClass({
  mixins: [History],

  scrollToElement: function(e) {
    var element;
    if (e.target.id === "explore-dropdown-text") {
      element = document.getElementById("explore-container");
    } else if (e.target.id === "customers-dropdown-text") {
      element = document.getElementById("media-container");
    } else if (e.target.id === "connect-dropdown-text") {
      element = document.getElementById("bottom-container");
    } else if (e.target.id === "lairshare-logo-container") {
      element = document.getElementById("landing-page");
    }

    if (element) {
      setTimeout(function(){
				$('html, body').animate({
					scrollTop: element.offsetTop - 30}, "slow");
			}, 251);
    } else {
      this.history.pushState(null, "/#");
    }
  },

  render: function() {
    return (
      <div className="navbar-left">
        <ul>
          <li className="absolute-logo"><a href="/#"><img className="lairshare-logo" id="lairshare-logo-container" src="/assets/lairshare_logo_rec.png" onClick={this.scrollToElement}></img></a></li>

          <div className="explore-dropdown dropdown-container">
            <p className="explore-dropdown explore-dropdown-text" id="explore-dropdown-text" onClick={this.scrollToElement}>Explore</p>
            <div className="dropdown-content">
              <a className="logo" href="/#/search/San-Francisco">San Francisco</a>
              <a className="logo" href="/#/search/New-York-City">New York</a>
              <a className="logo" href="/#/search/Saint-Martin">Caribbean</a>
            </div>
          </div>

          <div className="explore-dropdown dropdown-container">
            <p className="explore-dropdown explore-dropdown-text" id="customers-dropdown-text" onClick={this.scrollToElement}>Customers</p>
            <div className="dropdown-content">
              <a className="logo" id="customers-dropdown-text" onClick={this.scrollToElement} >Testimonies</a>
            </div>
          </div>

          <div className="explore-dropdown dropdown-container">
            <p className="explore-dropdown explore-dropdown-text" id="connect-dropdown-text" onClick={this.scrollToElement}>Connect</p>
            <div className="dropdown-content">
              <a className="icon-linkedin logo" id="fa-row" href="https://www.linkedin.com/in/nhatho89"><i className="fa fa-linkedin fa-lg" aria-hidden="true"></i><p>&nbsp;&nbsp;&nbsp;LinkedIn</p></a>
              <a className="icon-home logo" id="fa-row" href="http://nhatho89.github.io/PersonalSite/"><i className="fa fa-home fa-lg" aria-hidden="true"></i><p>&nbsp;&nbsp;&nbsp;Portfolio</p></a>
              <a className="icon-github-circled logo" id="fa-row" href="https://github.com/nhatho89"><i className="fa fa-github fa-lg" aria-hidden="true"></i><p>&nbsp;&nbsp;&nbsp;GitHub</p></a>
              <a id="fa-row" href="mailto:nhat.ho1989@gmail.com"><i className="fa fa-envelope fa-lg logo" aria-hidden="true"></i><p>&nbsp;&nbsp;&nbsp;Email</p></a>
            </div>
          </div>

        </ul>
      </div>
    );
  }
});

module.exports = NavBarLeft;
