var React = require('react');
var ReactDom = require('react-dom');
var ReactRouter = require('react-router');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = ReactRouter.IndexRoute;
var LandingPage = require('./components/landingPage.jsx');
var App = require('./components/app.jsx');
var RoomStore = require('./stores/roomStore.js');
var ApiUtil = require('./util/apiUtil.js');
var hashHistory = require('react-router').hashHistory;
var CurrentUser = require('./components/currentUser');
var NavBar = require('./components/navBar');
var Search = require('./components/Search');
var RoomShow = require('./components/RoomShow');
var RoomForm = require('./components/RoomForm');
var ReviewForm = require('./components/ReviewForm');


// var SearchIndex = require('./components/searchIndex');
// var Redirect = ReactRouter.Redirect;



var routes = (
  <Route component={App} path="/">
    <IndexRoute component={LandingPage}/>
    <Route component={Search} path="rooms"/>
      <Route path="rooms/new" component={RoomForm}/>
      <Route path="rooms/:roomId" component={RoomShow}>
        <Route path="review" components={ReviewForm}/>
      </Route>
  </Route>
);

document.addEventListener("DOMContentLoaded", function() {
  var root = document.querySelector('#content');
  ReactDom.render(<Router history={hashHistory}>{routes}</Router>, root);
});
