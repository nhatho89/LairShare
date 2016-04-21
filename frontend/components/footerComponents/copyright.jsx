var React = require('react');

var Copyright = React.createClass({

  render: function() {
    return (
      <div className="footer-column logo-column">
        <div className="footer-logo">
          <a className="footer-logo-img" href="/#"><img src="/assets/lairshare_logo.png" width="50" height="50" alt="lairshare"/></a>
        </div>
        <div className="copyright">
          <p>© LairShare Inc. 2016</p>
        </div>
      </div>
    );
  }

});

module.exports = Copyright;
