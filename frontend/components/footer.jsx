var React = require('react');

var Footer = React.createClass({

  render: function() {
    return (
      <div className="footer-container">
        <li>
          <a className="logo" href="https://github.com/nhatho89">
            GitHub
          </a>
        </li>

        <li>
          <a className="logo" href="https://www.linkedin.com/in/nhatho89">
            LinkedIn
          </a>
        </li>
      </div>

    );
  }

});

module.exports = Footer;
