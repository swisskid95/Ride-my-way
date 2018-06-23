'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// Middleware that logs messages regarding actions to the console
var morgan = require('morgan');

var ridesRoutes = require('./routes/rides');

app.use(morgan('dev'));

app.use('api/v1/rides', ridesRoutes);

// Handling error that does not go to the above specified route
app.use(function (req, res, next) {
  var error = new Error('Not found');
  error.status = 404;
  next(error);
});

// Handling other errors
app.use(function (error, req, res, next) {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
//# sourceMappingURL=app.js.map