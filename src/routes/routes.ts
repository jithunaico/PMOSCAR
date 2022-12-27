import { Router } from 'express';

import index from './web/index';

const router = Router();

// V1 routes
router.use('/pmis', index);

export default router;
