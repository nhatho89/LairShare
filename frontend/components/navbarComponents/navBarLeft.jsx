var React = require('react');

var NavBarLeft = React.createClass({

  render: function() {
    return (
      <div className="navbar-left">
        <ul>
          <li className="absolute-logo"><a href="/#"><img className="lairshare-logo" src="/assets/lairshare_logo.png"></img></a></li>
          <li><a className="logo" href="/#/search/San-Francisco">San Francisco</a></li>
          <li><a className="logo" href="/#/search/New-York-City">New York</a></li>
          <li><a className="logo" href="/#/search/Saint-Martin">Caribbean</a></li>
        </ul>
      </div>
    );
  }

});

module.exports = NavBarLeft;
