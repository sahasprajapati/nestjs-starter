import { IPostgresConfig } from '@config/interface/postgres-config.interface';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => {
        const postgresConfig = config.get<IPostgresConfig>('postgres');
        return {
          type: 'postgres',
          host: postgresConfig.host,
          port: +postgresConfig.port,
          username: postgresConfig.username,
          password: postgresConfig.password,
          database: postgresConfig.database,
          //   entities: postgresConfig.entities.split(','),
          migrations: postgresConfig.migrations.split(','),
          synchronize: postgresConfig.allowSynchronization,
          logging: postgresConfig.allowLogging,
          autoLoadEntities: true,
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class SetupDatabaseModule {}
