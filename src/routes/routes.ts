import { Router } from 'express';

import index from './web/index';

const router = Router();

// web routes
router.use('/pmis', index);

//TODO mob routes

//TODO admin routes

export default router;
