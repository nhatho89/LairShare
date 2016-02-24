var React = require('react');

var NavBar = React.createClass({

  render: function() {
    return (
      <div>

        <div id="navbar" className="navbar-collapse collapse">


              <ul className="navbar-left">
                  <li>
                    <a className="LS-logo" href="#">
                      <img alt="LairShare" src="/assets/LS-logo.png" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#">
                      LairShare
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://github.com/nhatho89">
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/nhatho89">
                      LinkedIn
                    </a>
                  </li>
              </ul>
            </div>
      </div>
    );
  }

});

module.exports = NavBar;
