import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/modules/user/services/user.service';
import { hashPassword, comparePasswords } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async login(email: string, password: string) {
    const user = await this.userService.findOneByEmail(email);
    if (!user || !comparePasswords(password, user.password)) {
      throw new UnauthorizedException();
    }

    return;
  }

  async signup(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  ) {
    const user = await this.userService.findOneByEmail(email);
    if (user) {
      throw new UnauthorizedException('User already exists');
    }

    const passwordHash = hashPassword(password);
    return this.userService.create({
      firstName,
      lastName,
      email,
      password: passwordHash,
    });
  }
}
