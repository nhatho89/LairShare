var React = require('react');
var ReactDom = require('react-dom');
var ReactRouter = require('react-router');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = ReactRouter.IndexRoute;
var LandingPage = require('./components/landingPage.jsx');
var App = require('./components/app.jsx');
var ApiUtil = require('./util/apiUtil.js');
var hashHistory = require('react-router').hashHistory;
var NavBar = require('./components/navbarComponents/navBar');
var RoomShow = require('./components/RoomShow');
var ReviewForm = require('./components/ReviewForm');
var UserIndex = require('./components/userIndex.jsx');
var SearchIndex = require('./components/searchIndex.jsx');
var HostIndex = require('./components/hostIndex.jsx');

var Redirect = ReactRouter.Redirect;


var routes = (
  <Route component={App} path="/">
    <IndexRoute component={LandingPage}/>
    <Route path="users/:id" component={UserIndex}></Route>
    <Route path="host" component={HostIndex}/>
    <Route path="/search/:loc" component={SearchIndex} />
    <Route path="rooms/:roomId" component={RoomShow}>
      <Route path="review" components={ReviewForm}/>
    </Route>
  </Route>
);

document.addEventListener("DOMContentLoaded", function() {
  var root = document.querySelector('#content');
  ReactDom.render(<Router history={hashHistory}>{routes}</Router>, root);
});
