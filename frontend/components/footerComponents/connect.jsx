var React = require('react');

var Connect = React.createClass({

  render: function() {
    return (
      <div className="footer-column">
        <strong className="heading">CONNECT</strong>
        <div className="social">
          <ul className="connect-row">
            <li><a href="mailto:nhat.ho1989@gmail.com"><i className="fa fa-envelope fa-lg" aria-hidden="true"></i></a></li>
            <li className="linkedin"><a className="icon-linkedin" href="https://www.linkedin.com/in/nhatho89"><i className="fa fa-linkedin fa-lg" aria-hidden="true"></i></a></li>
            <li className="home"><a className="icon-home" href="http://nhatho89.github.io/PersonalSite/"><i className="fa fa-home fa-lg" aria-hidden="true"></i></a></li>
            <li className="git"><a className="icon-github-circled" href="https://github.com/nhatho89"><i className="fa fa-github fa-lg" aria-hidden="true"></i></a></li>
            <li className="keep"></li>
          </ul>
        </div>
      </div>
    );
  }

});

module.exports = Connect;
