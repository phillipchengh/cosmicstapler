var K = require('./Constants');

module.exports = {

  randomBackground: function() {
    return K.BLOCK.COLORS[Math.floor(Math.random()*K.BLOCK.COLORS.length)];
  },

  randomColor: function() {
    return K.CHAR.COLORS[Math.floor(Math.random()*K.CHAR.COLORS.length)];
  }

};
