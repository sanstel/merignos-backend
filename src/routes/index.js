import express from 'express';

import users from './users';

const router = express.Router();

router
  .get('/', (req, res) => res.status(200).json({
    status: 'success',
    message: 'Welcome to Merignos API',
  }));

router.use('/users', users);

export default router;
