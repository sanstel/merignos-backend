import express from 'express';

import Mongoose, { Schema } from 'mongoose';

const router = express.Router();

const usersSchema = new Schema({
  name: String
});

const Users = Mongoose.model("Users", usersSchema);


router.get('/', (req, res) => res.status(200).json({
  status: 'success',
  users: [],
}));

export default router;
