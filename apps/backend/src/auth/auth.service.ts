import { Injectable } from '@nestjs/common';
import { LoginDto, RegisterDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(private , private jwtService: JwtService, private config: ConfigService) {}

  async SignIn(loginDto: LoginDto) {}

  async SignUp(registerDto: RegisterDto) {
    const findUser = await this.db
    if (findUser) throw new Error(`User already registered`);

    if (!findUser) {
      const hashedPassword = await bcrypt.hash(registerDto.password, 10);
      const newUser = await this.

      const user = {
        firstname: newUser.firstname,
      };

      return `User ${user.} created successfully`;
    }

    throw new Error('This User already exists, Please create a new one');
  }
}
