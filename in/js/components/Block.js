var K = require('../Constants');
var Color = require('../Color');

var Block = React.createClass({

  getInitialState: function() {
    var background = Color.randomBackground();
    return {
      background: background
    };
  },

  componentDidMount: function() {
    var thisBlock = this;
    // Should we save the interval handler if block is ever deleted?
    var intervalHandler = setInterval(function() {
      thisBlock.setState({background: Color.randomBackground()});
    }, K.LONG_TIME);
  },

  render: function() {
    var classSet = {
      'block': true
    };
    for (var i = 0; i < K.BLOCK.COLORS.length; i++) {
      classSet[K.BLOCK.COLORS[i]] = this.state.background === K.BLOCK.COLORS[i];
    }
    var classes = React.addons.classSet(classSet);
    return <li className={classes}></li>;
  }

});

module.exports = Block;
