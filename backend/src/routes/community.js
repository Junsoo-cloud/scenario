import { Router } from 'express';
import { z } from 'zod';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

router.get('/posts', async (req, res) => {
  // TODO: fetch posts
  return res.json({ items: [] });
});

router.get('/posts/:id', async (req, res) => {
  // TODO: fetch post detail
  return res.json({ item: null });
});

router.post('/posts', requireAuth, async (req, res) => {
  const schema = z.object({
    category: z.string(),
    title: z.string().min(2),
    content: z.string().min(10),
    spoiler: z.boolean().optional(),
    tags: z.array(z.string()).optional()
  });

  const result = schema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ error: 'INVALID_INPUT', details: result.error.errors });
  }

  // TODO: insert post
  return res.status(201).json({ message: 'CREATED' });
});

router.post('/posts/:id/comments', requireAuth, async (req, res) => {
  const schema = z.object({ content: z.string().min(2), parentId: z.string().optional() });
  const result = schema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ error: 'INVALID_INPUT', details: result.error.errors });
  }

  // TODO: insert comment
  return res.status(201).json({ message: 'COMMENTED' });
});

export default router;
