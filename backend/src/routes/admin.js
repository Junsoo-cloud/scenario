import { Router } from 'express';
import { requireAuth, requireRole } from '../middleware/auth.js';

const router = Router();

router.get('/dashboard', requireAuth, requireRole('admin'), async (req, res) => {
  // TODO: return metrics
  return res.json({
    dau: 0,
    pendingScripts: 0,
    revenue: 0
  });
});

export default router;
