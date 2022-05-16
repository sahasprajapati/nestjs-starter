import { registerAs } from '@nestjs/config';

export default registerAs('mail', () => ({
  concurrency: process.env.QUEUE_CONCURRENCY ?? 1,
  queueName: process.env.QUEUE_NAME ?? 'mailbot',
  limiter: {
    max: process.env.QUEUE_LIMITER_MAX ?? 1,
    duration: process.env.QUEUE_LIMITER_DURATION ?? 1000,
  },
}));
