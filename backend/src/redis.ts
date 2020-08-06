import * as Redis from 'ioredis';
require('dotenv').config();
const { REDIS_PASS, REDIS_PORT, REDIS_HOST } = process.env;
export default new Redis({
  port: Number(REDIS_PORT),
  host: REDIS_HOST,
  family: 4,
  password: REDIS_PASS,
});
