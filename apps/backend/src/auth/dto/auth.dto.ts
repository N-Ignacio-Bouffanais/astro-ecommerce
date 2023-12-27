import { IsNotEmpty, IsEnum, IsString, IsEmail, MinLength } from 'class-validator';

enum AllowedRole {
  "ADMIN",
  "USER",
}

export class LoginDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters' })
  password: string;
}

export class RegisterDto extends LoginDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(AllowedRole)
  role: AllowedRole;
}
