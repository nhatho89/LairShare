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
    // console.log(this.refs.locinput.value);
    this.setState({
      loc: this.refs.locinput.value
    });
    // autocomplete: needs to add a delay using setTimeout and clearTimeout to cancel if the user changes before timeout expires
  },

  render: function() {

    var buttonSubmit = (
      <span className="input-group-btn">
        <button className="btn btn-default" type="button" onClick={this.handleSearch}>Search</button>
      </span>
    );

    var buttonProgress = (
      <span className="input-group-btn">
        <button className="btn btn-default" disabled>
          <div className="three-quarters-loader">
            Loading…
          </div>
        </button>
      </span>
    );
    var design = (
      <div className="col-xs-12">
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="col-xs-offset-2 col-xs-8">
              <form className="input-group" role="form" onSubmit={this.handleSearch}>
                <input
                   type="text"
                   className="form-control center"
                   id="landing-search-input"
                   onChange={this.handleLocChange}
                   placeholder={this.state.placeholder}
                   ref="locinput"
                   onFocus={this.searchBarMoveUp}
                   onBlur={this.searchBarMoveBack}/>

                 {this.state.showLoading ? buttonProgress : buttonSubmit}

              </form>
            </div>
          </div>
        </div>
      </div>
    );


    return (

      <div className="search-bar">
        {design}
      </div>
    );
  }
});

module.exports = LandingSearchBar;
