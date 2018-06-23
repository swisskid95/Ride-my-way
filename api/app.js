import express from 'express';

const app = express();

// Middleware that logs messages regarding actions to the console
const morgan = require('morgan');

const ridesRoutes = require('./routes/rides');

app.use(morgan('dev'));

app.use('/api/v1/rides', ridesRoutes);

// Handling error that does not go to the above specified route
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

// Handling other errors
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
