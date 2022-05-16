import { registerAs } from '@nestjs/config';

export default registerAs('postgres', () => ({
  type: process.env.POSTGRES_TYPE,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DATABASE,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  migrations: process.env.POSTGRES_MIGRATIONS,
  allowLogging: process.env.POSTGRES_LOGGING,
  allowSynchronization: process.env.POSTGRES_SYNCHRONIZE,
  seeds: process.env.POSTGRES_SEEDING_SEEDS,
  factories: process.env.POSTGRES_SEEDING_FACTORIES,
}));
