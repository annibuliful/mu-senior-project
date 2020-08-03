import * as jwt from 'jsonwebtoken';

require('dotenv').config();
export default {
  sign: (payload: Record<string, any>, expireDate?: string): string => {
    const expiresIn = expireDate || '7d';
    return jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn,
    });
  },
  verify: (authorization: string) => {
    try {
      if (authorization) {
        const token = authorization.replace('Bearer ', '');
        jwt.verify(token, process.env.JWT_SECRET);
        const userInfo: any = jwt.decode(token);
        return { isValid: true, ...userInfo };
      }
    } catch (e) {
      return { isValid: false };
    }
  },
  decode: (token: string): any => jwt.decode(token),
};
