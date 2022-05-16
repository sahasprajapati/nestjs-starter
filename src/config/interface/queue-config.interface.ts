export interface IQueueConfig {
  concurrency: number;
  queueName: string;
  limiter: {
    max: number;
    duration: number;
  };
}
