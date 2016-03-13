var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var History = require('react-router').History;


var LandingSearchBar = React.createClass({
  mixins: [History],

  getInitialState: function() {
    return ({
      loc: "",
      placeholder: "Where do you want to go?",
      showLoading: false
    });
  },



  handleSearch: function(e) {
    if (arguments.length > 0) {
      e.preventDefault();
    }

    // may use History mixins;
    // this.history.pushState(null, 'search/' + this.state.loc)
    // debugger;

    if (this.state.loc === ""){
      this.setState({
        placeholder: "Please set location"
      });
    } else {
      setTimeout(this.redirectToSearch, 1000);
      this.setState({
        showLoading: true
      })

    }
  },

  redirectToSearch: function() {
    var loc = this.state.loc.replace(/\W+/g, "-");
    console.log("pushStatefromsearch");

    this.history.push({pathname: 'search/' + loc});
  },



  handleLocChange: function(e) {
    this.setState({
      loc: this.refs.locinput.value
    });
  },

  searchBarMoveUp: function() {

    $(".search-bar").animate({'bottom': '15%'},1000);

    // }.bind(this), 1800);

  },



  searchBarMoveBack: function() {
    $(".search-bar").animate({'bottom': '0px'},500);
  },

  render: function() {

    var searchIcon = (
      <img className="search-icon" src="assets/icons/search.png" onClick={this.handleSearch}/>
    );

    var design = (
              <form className="input-group" role="form" onSubmit={this.handleSearch}>
                <input
                   type="text"
                   className="form-control"
                   id="landing-search-input"
                   onChange={this.handleLocChange}
                   placeholder={this.state.placeholder}
                   ref="locinput"
                   onFocus={this.searchBarMoveUp}
                   onBlur={this.searchBarMoveBack}
                   />



              </form>

    );


    return (

      <div className="search-bar">
        {design}
        <div className="search-icon-container">

          {searchIcon}
        </div>
      </div>
    );
  }
});

module.exports = LandingSearchBar;
