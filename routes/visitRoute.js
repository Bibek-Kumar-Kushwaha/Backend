import express from 'express';
import { getVisitCount, incrementVisitCount } from '../controllers/VisitCountController.js';

const router = express.Router();

// Route to increment the visit count
router.get('/visit', incrementVisitCount);

// Route to get the current visit count
router.get('/visit/count', getVisitCount);

export default router;
