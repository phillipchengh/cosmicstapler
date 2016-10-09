var Bootstrap = require('./Bootstrap');
var Bar = require('./components/Bar');

React.render(<Bar/>, document.getElementById('bar'));

Bootstrap.renderTextNodes();

console.log(new Date().getTime());
