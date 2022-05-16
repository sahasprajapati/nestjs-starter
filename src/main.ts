import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app/app.module';
import { setupSwagger } from './swagger/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);

  app.setGlobalPrefix('api');
  // Setup class validation for request body validation based on dto
  app.useGlobalPipes(new ValidationPipe());

  // Serve static content
  app.useStaticAssets(join(__dirname, '..', 'public'));
  // Initialize swagger pages
  setupSwagger(app);

  await app.listen(configService.get('app.port'));
}
bootstrap();
