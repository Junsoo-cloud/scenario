import { Router } from 'express';
import { z } from 'zod';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

router.get('/', async (req, res) => {
  // TODO: query scripts with filters
  return res.json({ items: [] });
});

router.get('/:id', async (req, res) => {
  // TODO: fetch script by id
  return res.json({ item: null });
});

router.post('/', requireAuth, async (req, res) => {
  const schema = z.object({
    title: z.string().min(2),
    logline: z.string().min(5),
    synopsis: z.string().min(10),
    category: z.string(),
    genre: z.string(),
    runtime: z.string(),
    priceType: z.enum(['FIXED', 'INQUIRY', 'NEGOTIABLE']),
    price: z.number().optional()
  });

  const result = schema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ error: 'INVALID_INPUT', details: result.error.errors });
  }

  // TODO: insert script & files
  return res.status(201).json({ message: 'CREATED' });
});

export default router;
