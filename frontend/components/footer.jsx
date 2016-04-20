var React = require('react');
var FooterMessage = require('./footerMessage');

var Footer = React.createClass({

  render: function() {
    return (
      <section className="bottom-container">
        <div className="wrap">
          <div className="footer-container">

            <div className="footer-column logo-column">
              <div className="footer-logo">
                <a className="footer-logo-img" href="/#"><img src="/assets/lairshare_logo.png" width="50" height="50" alt="lairshare"/></a>
              </div>
              <div className="copyright">
                <p>© LairShare Inc. 2016</p>
              </div>
            </div>

            <div className="row">
              <div className="footer-column">
                <strong className="heading">Learn More</strong>
                <ul className="footer-detail">
                  <li><a>Features</a></li>
                  <li><a>Integrations</a></li>
                  <li><a>Customers</a></li>
                  <li><a>Pricing &amp; Plans</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <strong className="heading">About</strong>
                <ul className="footer-detail">
                  <li><a>Company</a></li>
                  <li><a>Jobs</a></li>
                  <li><a>Blog</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <strong className="heading">Support</strong>
                <ul className="footer-detail">
                  <li><a>Help</a></li>
                  <li><a>Docs</a></li>
                  <li><a>Status</a></li>
                  <li><a>Terms</a></li>
                </ul>
              </div>

            </div>

            <div className="footer-column">
              <strong className="heading">CONNECT</strong>
              <div className="social">
                <ul className="connect-row">
                  <li><a href="mailto:nhat.ho1989@gmail.com"><i className="fa fa-envelope fa-lg" aria-hidden="true"></i></a></li>
                  <li className="linkedin"><a className="icon-linkedin" href="https://www.linkedin.com/in/nhatho89"><i className="fa fa-linkedin fa-lg" aria-hidden="true"></i></a></li>
                  <li className="home"><a className="icon-home" href="https://github.com/nhatho89/PersonalSite"><i className="fa fa-home fa-lg" aria-hidden="true"></i></a></li>
                  <li className="git"><a className="icon-github-circled" href="https://github.com/nhatho89"><i className="fa fa-github fa-lg" aria-hidden="true"></i></a></li>
                  <li className="keep"></li>
                </ul>
              </div>
            </div>
            </div>

          </div>
          <FooterMessage/>
      </section>

    );
  }
});

module.exports = Footer;
