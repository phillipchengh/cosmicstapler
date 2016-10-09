var K = require('../Constants');
var Block = require('./Block');

var Bar = React.createClass({

  componentDidMount: function() {
    console.log(this.props.children);
    var thisBar = this;
    var intervalHandler = setInterval(function() {
      React.Children.map(thisBar.props.children, function(child) {
        console.log(child);
        child.setState({background: Color.randomBackground()});
      }); 
    }, K.LONG_TIME);
  },

  render: function() {
    return (
      <div className="bar">
        <Block/>
        <Block/>
        <Block/>
        <Block/>
        <Block/>
        <Block/>
        <Block/>
        <Block/>
        <Block/>
        <Block/>
        <Block/>
        <Block/>
        <Block/>
        <Block/>
        <Block/>
        <Block/>
        <Block/>
        <Block/>
        <Block/>
        <Block/>
      </div>
    );
  }
});

module.exports = Bar;
