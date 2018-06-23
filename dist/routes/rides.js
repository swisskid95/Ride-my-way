'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// Handle's Get request to view all rides
router.get('/', function (req, res, next) {
  res.status(200).json({
    message: 'Handling GET requests to /rides'
  });
});

// Handle's Post request to add to ride offers
router.post('/', function (req, res, next) {
  res.status(201).json({
    message: 'Handling POST requests to /rides'
  });
});

// Handle's Get request to view a specific ride id
router.get('/:rideId', function (req, res, next) {
  var id = req.params.rideId;
  res.status(200).json({
    message: 'You passed an id',
    id: id
  });
});

// Handle Post request for request to join a specific ride id
router.post('/:rideId/requests', function (req, res, next) {
  var id = req.params.rideId;
  res.status(201).json({
    message: 'sending request using POST to this ride  ' + id + ' id',
    id: id
  });
});

// Handle's Get request to view all requests for a ride id
router.get('/:rideId/requests', function (req, res, next) {
  var id = req.params.rideId;
  res.status(200).json({
    message: 'sending GET for the requests in the ' + id + ' id',
    id: id
  });
});

module.exports = router;
//# sourceMappingURL=rides.js.map