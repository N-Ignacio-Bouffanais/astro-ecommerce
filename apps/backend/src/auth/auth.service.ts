import { HttpException, Injectable } from '@nestjs/common';
import { LoginDto, RegisterDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private config: ConfigService,
  ) {}

  async SignIn(loginDto: LoginDto) {
    const findUser = await this.prisma.user.findUnique({
      where: {
        email: loginDto.email,
      },
    });

    if (!findUser) throw new HttpException('User not found', 404);

    const checkPassword = await bcrypt.compare(
      loginDto.password,
      findUser.hash,
    );

    if (!checkPassword) throw new HttpException('Wrong Password', 403);

    const payload = {
      username: findUser.username,
      role: findUser.role,
    };

    const token = this.jwtService.sign(payload, {
      secret: this.config.get<string>('SECRET_KEY'),
      expiresIn: '10m',
    });

    return token;
  }

  async SignUp(registerDto: RegisterDto) {
    const findUser = await this.prisma.user.findFirst();
    if (findUser) throw new Error(`User already registered`);

    if (!findUser) {
      const hashedPassword = await bcrypt.hash(registerDto.password, 10);
      const newUser = await this.prisma.user.create({
        data: {
          email: registerDto.email,
          hash: hashedPassword,
          role: registerDto.role.toString(),
          username: registerDto.username,
        },
      });

      const user = {
        username: newUser.username,
      };

      return `User ${user.username} created successfully`;
    }

    throw new Error('This User already exists, Please create a new one');
  }
}
