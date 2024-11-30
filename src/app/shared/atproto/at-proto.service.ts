import { Injectable } from '@angular/core';
import { AuthService } from '@shared/atproto/auth.service';
import { UserService } from '@shared/atproto/user.service';

@Injectable({
  providedIn: 'root',
})
export class AtProtoService {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService
  ) {}

  async getProfile() {
    return this.userService.getProfile();
  }

  async login(identifier: string, password: string) {
    return this.authService.login(identifier, password);
  }
}
