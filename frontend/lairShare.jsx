var React = require('react');
var ReactDom = require('react-dom');
var ReactRouter = require('react-router');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = ReactRouter.IndexRoute;
var LandingPage = require('./components/landingPage.jsx');
var App = require('./components/app.jsx');
var RoomStore = require('./stores/room.js');
var ApiUtil = require('./util/apiUtil.js');
var hashHistory = require('react-router').hashHistory;
var CurrentUser = require('./components/currentUser');




var routes = (
  <Route component={App} path="/">
    <IndexRoute component={LandingPage}/>
  </Route>
);

document.addEventListener("DOMContentLoaded", function() {
  var root = document.querySelector('#content');
  ReactDom.render(<Router history={hashHistory}>{routes}</Router>, root);
});
