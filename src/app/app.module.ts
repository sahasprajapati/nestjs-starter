import { AuthModule } from '@/modules/auth/auth.module';
import { UsersModule } from '@/modules/users/users.module';
import { SetupConfigModule } from '@config/setup-config/setup-config.module';
import { SetupDatabaseModule } from '@database/setup-database/setup-database.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [AuthModule, UsersModule, SetupConfigModule, SetupDatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
