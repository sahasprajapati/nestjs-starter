import appConfig from '@config/app.config';
import jwtConfig from '@config/jwt.config';
import mailConfig from '@config/mail.config';
import postgresConfig from '@config/postgres.config';
import queueConfig from '@config/queue.config';
import redisConfig from '@config/redis.config';
import { validateEnv } from '@config/validation/env.validation';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [
        appConfig,
        mailConfig,
        postgresConfig,
        queueConfig,
        redisConfig,
        jwtConfig,
      ],
      validate: validateEnv,
      isGlobal: true,
    }),
  ],
})
export class SetupConfigModule {}
