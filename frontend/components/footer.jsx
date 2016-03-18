var React = require('react');

var Footer = React.createClass({

  render: function() {
    return (
      <div className="footer-container">
        <div className="row-container">

          <div>
            <a className="logo" href="https://github.com/nhatho89">
              GitHub
            </a>
          </div>

          <div>
            <a className="logo" href="https://www.linkedin.com/in/nhatho89">
              LinkedIn
            </a>
          </div>
          
        </div>
      </div>

    );
  }

});

module.exports = Footer;
