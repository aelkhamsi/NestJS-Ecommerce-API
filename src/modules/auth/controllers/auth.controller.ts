import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getHello(): string {
    return 'Hello';
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  // TODO: validate body of request
  login(@Body() loginDto) {
    const { email, password } = loginDto;
    return this.authService.login(email, password);
  }
}
