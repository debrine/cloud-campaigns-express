import { verify } from 'jsonwebtoken';
// eslint-disable @typescript-eslint/no-explicit-any
export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader != null ? authHeader.split(' ')[1] : null;

  if (token == null) return res.sendStatus(401);

  const accessToken = process.env.ACCESS_TOKEN_SECRET ?? '';
  verify(token, accessToken, (err, user) => {
    console.log(err);
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};
