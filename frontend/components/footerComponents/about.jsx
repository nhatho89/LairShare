var React = require('react');

var About = React.createClass({

  render: function() {
    return (
      <div className="footer-column">
        <strong className="heading">About</strong>
        <ul className="footer-detail">
          <li><a>Company</a></li>
          <li><a>Jobs</a></li>
          <li><a>Blog</a></li>
        </ul>
      </div>
    );
  }

});

module.exports = About;
