import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { LoginDto, RegisterDto } from './dto';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async SignIn(@Body() loginDto: LoginDto): Promise<{}> {
    return this.authService.SignIn(loginDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('register')
  async SignUp(@Body() registerDto: RegisterDto) {
    return this.authService.Register(registerDto);
  }
}
