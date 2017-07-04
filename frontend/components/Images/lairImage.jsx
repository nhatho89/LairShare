var React = require('react');
var PropTypes = React.PropTypes;

import { styles } from './lairImageStyle.scss';

var LairImage = React.createClass({

  render: function() {
    return (
      <div className={`${styles}`}>
        <img className={`${this.props.imageType}`} src={this.props.image}/>
      </div>
    );
  }

});

module.exports = LairImage;
