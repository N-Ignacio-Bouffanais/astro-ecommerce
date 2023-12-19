import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { LoginDto, RegisterDto } from './dto';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async SignIn(@Body() loginDto: LoginDto): Promise<{}> {
    try {
      return this.authService.SignIn(loginDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async SignUp(registerDto: RegisterDto){

  }
}
