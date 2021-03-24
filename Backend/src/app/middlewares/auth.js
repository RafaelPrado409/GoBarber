import jwt from 'jsonwebtoken';
import { promisify } from 'util'; // transforma uma funcao que utilizaria callback para um funcao que utiliza async await

import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided ' });
  }

  const [, token] = authHeader.split(' '); // desestruturacao

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.id;

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token Invalid' });
  }
};
