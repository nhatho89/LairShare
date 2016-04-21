var React = require('react');
var FooterMessage = require('./footerMessage');
var LearnMore = require('./learnMore');
var About = require('./about');
var Support = require('./support');
var Connect = require('./connect');
var Copyright = require('./copyright');

var Footer = React.createClass({

  render: function() {
    return (
      <section className="bottom-container">
        <div className="wrap">
          <div className="footer-container">

            <Copyright/>

            <div className="footer-row">
              <LearnMore/>
              <About/>
              <Support/>
            </div>
            <Connect/>
            </div>

          </div>
          <FooterMessage/>
      </section>

    );
  }
});

module.exports = Footer;
