import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { z } from 'zod';

const router = Router();

const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  nickname: z.string().min(2)
});

router.post('/signup', (req, res) => {
  const result = signupSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ error: 'INVALID_INPUT', details: result.error.errors });
  }

  // TODO: create user, hash password, send email verification
  return res.status(201).json({ message: 'SIGNED_UP' });
});

router.post('/login', (req, res) => {
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
  });
  const result = schema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ error: 'INVALID_INPUT', details: result.error.errors });
  }

  // TODO: verify password
  const token = jwt.sign(
    { sub: 'user-id', role: 'user' },
    process.env.JWT_SECRET,
    { expiresIn: '2h' }
  );

  return res.json({ accessToken: token });
});

export default router;
