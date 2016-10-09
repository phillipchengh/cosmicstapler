var Hyperchar = require('./Hyperchar');

var Hypertext = React.createClass({

  render: function() {
    var chars = this.props.text.split('');
    return (
      <span className="hypertext">
        {chars.map(function(c, i) {
          return <Hyperchar char={c} key={i} />;
        })}
      </span>
    );
  }

});

module.exports = Hypertext;
