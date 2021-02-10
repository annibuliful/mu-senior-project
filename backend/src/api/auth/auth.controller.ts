import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { LoginDto } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  async login(@Body() data: LoginDto) {
    try {
      const result = await this.authService.login(data);

      return result;
    } catch (e) {
      throw new HttpException(e.error, 500);
    }
  }
}
