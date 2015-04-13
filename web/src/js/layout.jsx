var React = require('react');
var Footprint = require('./footprint.jsx');

var Layout = React.createClass({
  render: function(){
    var imgStyles = {
      float: 'left'
    };
    return (
      <div>
        <h1>The Less Waste Game</h1>
        <img src="/images/carbon-footprint-green.jpg" style={imgStyles} />
        <Footprint />
      </div>
    );
  }
});

module.exports = Layout;
