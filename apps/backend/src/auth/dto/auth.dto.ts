import { IsNotEmpty, IsEnum, IsString, IsEmail } from 'class-validator';

enum AllowedRole {
  ADMIN,
  USER,
}

export class LoginDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

export class RegisterDto extends LoginDto {
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(AllowedRole)
  role: AllowedRole;
}
