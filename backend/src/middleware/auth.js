import jwt from 'jsonwebtoken';

export function requireAuth(req, res, next) {
  const header = req.headers.authorization;
  if (!header) {
    return res.status(401).json({ error: 'AUTH_REQUIRED' });
  }
  const token = header.replace('Bearer ', '');
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    return next();
  } catch (error) {
    return res.status(401).json({ error: 'INVALID_TOKEN' });
  }
}

export function requireRole(role) {
  return (req, res, next) => {
    if (!req.user || req.user.role !== role) {
      return res.status(403).json({ error: 'FORBIDDEN' });
    }
    return next();
  };
}
