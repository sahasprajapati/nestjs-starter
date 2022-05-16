import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  port: process.env.APP_PORT,
  routePrefix: process.env.APP_ROUTE_PREFIX,
  url: process.env.APP_URL,
  name: process.env.APP_NAME,
}));
