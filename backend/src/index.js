import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.js';
import scriptRoutes from './routes/scripts.js';
import communityRoutes from './routes/community.js';
import adminRoutes from './routes/admin.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(
  cors({
    origin: process.env.APP_ORIGIN || '*'
  })
);
app.use(express.json({ limit: '2mb' }));

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/auth', authRoutes);
app.use('/api/scripts', scriptRoutes);
app.use('/api/community', communityRoutes);
app.use('/api/admin', adminRoutes);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`API listening on ${port}`);
});
