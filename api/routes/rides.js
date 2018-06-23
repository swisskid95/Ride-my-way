
import express from 'express';

const router = express.Router();

// Handle's Get request to view all rides
router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET requests to /rides',
  });
});

// Handle's Post request to add to ride offers
router.post('/', (req, res, next) => {
  res.status(201).json({
    message: 'Handling POST requests to /rides',
  });
});

// Handle's Get request to view a specific ride id
router.get('/:rideId', (req, res, next) => {
  const id = req.params.rideId;
  res.status(200).json({
    message: 'You passed an id',
    id,
  });
});

// Handle Post request for request to join a specific ride id
router.post('/:rideId/requests', (req, res, next) => {
  const id = req.params.rideId;
  res.status(201).json({
    message: `sending request using POST to this ride  ${id} id`,
    id,
  });
});

// Handle's Get request to view all requests for a ride id
router.get('/:rideId/requests', (req, res, next) => {
  const id = req.params.rideId;
  res.status(200).json({
    message: `sending GET for the requests in the ${id} id`,
    id,
  });
});

module.exports = router;
