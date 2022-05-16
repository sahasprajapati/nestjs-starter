import { plainToClass } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  validateSync,
} from 'class-validator';

enum Environment {
  Development = 'development',
  Production = 'production',
  Test = 'test',
  Provision = 'provision',
}

class EnvironmentVariables {
  @IsNotEmpty()
  @IsEnum(Environment)
  NODE_ENV: Environment;

  //   App
  @IsNotEmpty()
  @IsNumber()
  APP_PORT: number;
  @IsNotEmpty()
  @IsString()
  APP_ROUTE_PREFIX: string;
  @IsNotEmpty()
  @IsString()
  APP_URL: string;
  @IsNotEmpty()
  @IsString()
  APP_NAME: string;

  // Postgres database
  @IsNotEmpty()
  @IsString()
  POSTGRES_HOST: string;
  @IsNotEmpty()
  @IsNumber()
  POSTGRES_PORT: number;
  @IsNotEmpty()
  @IsString()
  POSTGRES_USER: string;
  @IsNotEmpty()
  @IsString()
  POSTGRES_PASSWORD: string;
  @IsNotEmpty()
  @IsString()
  POSTGRES_DATABASE: string;
  @IsNotEmpty()
  @IsString()
  POSTGRES_TYPE: string;
  @IsNotEmpty()
  @IsBoolean()
  POSTGRES_LOGGING: boolean;
  @IsNotEmpty()
  @IsBoolean()
  POSTGRES_SYNCHRONIZE: boolean;
  @IsNotEmpty()
  @IsString()
  POSTGRES_MIGRATIONS: string;
  @IsNotEmpty()
  @IsString()
  POSTGRES_SEEDING_FACTORIES: string;
  @IsNotEmpty()
  @IsString()
  POSTGRES_SEEDING_SEEDS: string;

  // JWT

  @IsNotEmpty()
  @IsString()
  JWT_SECRET: string;
  @IsNotEmpty()
  @IsString()
  JWT_EXPIRES_IN: string;

  // SMTP(Mail Provider)
  @IsNotEmpty()
  @IsString()
  SMTP_PROVIDER: string;
  @IsNotEmpty()
  @IsString()
  SMTP_HOST: string;
  @IsNotEmpty()
  @IsNumber()
  SMTP_PORT: number;
  @IsNotEmpty()
  @IsString()
  SMTP_USER: string;
  @IsNotEmpty()
  @IsString()
  SMTP_PASSWORD: string;
  @IsNotEmpty()
  @IsString()
  MAIL_FROM_NAME: string;

  // QUEUE config
  @IsNotEmpty()
  @IsNumber()
  QUEUE_CONCURRENCY: number;
  @IsNotEmpty()
  @IsString()
  QUEUE_NAME: string;
  @IsNotEmpty()
  @IsNumber()
  QUEUE_LIMITER_MAX: number;
  @IsNotEmpty()
  @IsNumber()
  QUEUE_LIMITER_DURATION: number;

  // Redis Config
  @IsNotEmpty()
  @IsString()
  REDIS_HOST: string;
  @IsNotEmpty()
  @IsNumber()
  REDIS_PORT: number;
  @IsNotEmpty()
  @IsString()
  REDIS_PASSWORD: string;
}

export function validateEnv(config: Record<string, unknown>) {
  const validatedConfig = plainToClass(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
