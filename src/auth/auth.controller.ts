import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterRequest } from './dto/register-request';
import { LoginRequest } from './dto/login-request';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
  }

  @Post('register')
  register(@Body() registerRequest: RegisterRequest): Promise<void> {
    return this.authService.register(registerRequest);
  }
}