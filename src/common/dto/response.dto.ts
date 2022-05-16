export abstract class ResponseDto<T> {
  success: boolean;
  data: T;
  statusCode: number;
  message: string;
}
