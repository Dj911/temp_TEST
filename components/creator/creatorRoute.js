import express from 'express';
import { register } from './creatorController'

const router = express.Router();

router.post('/register', register)

module.exports = router