var React = require('react');
var ReactDom = require('react-dom');
var ReactRouter = require('react-router');
var root = document.getElementById('content');
var Router = require('react-router').Router;
var Route = require('react-router').Route;

var UserIndex = require('./components/userIndex.jsx');


var App = React.createClass({
  render: function() {
    return (
      <div>
        App!!
        {this.props.children}
      </div>
    );
  }
});



var routes = (
  <Route component={App} path="/">
    <Route path="users/" component={UserIndex}></Route>
  </Route>
);

document.addEventListener("DOMContentLoaded", function() {
  var root = document.querySelector('#content');
  ReactDom.render(<Router>{routes}</Router>, root);
});
