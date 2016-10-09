var K = require('../Constants');
var Color = require('../Color');

var Hyperchar = React.createClass({

  getInitialState: function() {
    var color = Color.randomColor();
    return {
      color: color
    };
  },

  componentDidMount: function() {
    var thisChar = this;
    // Should we save the interval handler if block is ever deleted?
    var intervalHandler = setInterval(function() {
      thisChar.setState({color: Color.randomColor()});
    }, K.LONG_TIME);

  },

  render: function() {
    var classSet = {
      hyperchar: true
    };
    for (var i = 0; i < K.CHAR.COLORS.length; i++) {
      classSet[K.CHAR.COLORS[i]] = this.state.color === K.CHAR.COLORS[i];
    }
    var classes = React.addons.classSet(classSet);
    return <span className={classes}>{this.props.char}</span>;
  }

});

module.exports = Hyperchar;
