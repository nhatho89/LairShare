var React = require('react');

var Support = React.createClass({

  render: function() {
    return (
      <div className="footer-column">
        <strong className="heading">Support</strong>
        <ul className="footer-detail">
          <li><a>Help</a></li>
          <li><a>Docs</a></li>
          <li><a>Status</a></li>
          <li><a>Terms</a></li>
        </ul>
      </div>
    );
  }

});

module.exports = Support;
