import { ResponseDto } from '@common/dto/response.dto';
import { ApiProperty } from '@nestjs/swagger';
class LoginResponse {
  @ApiProperty()
  access_token: string;
  @ApiProperty()
  refresh_token: string;
  @ApiProperty()
  expiry: string;
}
ResponseDto;
export class LoginResponseDto implements ResponseDto<LoginResponse> {
  success: boolean;
  data: LoginResponse;
  statusCode: number;
  message: string;
}
