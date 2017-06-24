var React = require('react');

var LearnMore = React.createClass({

  render: function() {
    return (
      <div className="footer-column">
        <strong className="heading">Learn More</strong>
        <ul className="footer-detail">
          <li><a>Features</a></li>
          <li><a>Integrations</a></li>
          <li><a>Customers</a></li>
          <li><a>Pricing &amp; Plans</a></li>
        </ul>
      </div>
    );
  }
});

module.exports = LearnMore;
