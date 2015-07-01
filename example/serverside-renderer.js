require('babel/register');

var React = require('react');
var DatePicker = require('../dist/aion.js');

var Example = React.createClass({
  getInitialState: function () {
    return {};
  },
  render: function () {
    return React.createElement(
      DatePicker,
      {}
    );
  }
});

var html = React.renderToString(React.createElement(Example));
console.log(html);