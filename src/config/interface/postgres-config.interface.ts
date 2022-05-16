export interface IPostgresConfig {
  type: string;
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
  migrations: string;
  allowLogging: boolean;
  allowSynchronization: boolean;
  seeds: string;
  factories: string;
}
