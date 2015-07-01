var React = require('react');
var DatePicker = require('../src/datepicker');


var App = React.createClass({

  getInitialState: function() {
    return {};
  },

  render: function () {
    return <DatePicker/>
  }
});


module.exports = App;