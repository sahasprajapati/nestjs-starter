export interface IMailConfig {
  host: number;
  port: number;
  fromName: string;
  auth: {
    user: string;
    pass: string;
  };
}
