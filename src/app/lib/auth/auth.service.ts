import { Injectable } from '@angular/core';
import { AtpAgent } from '@app/lib/atproto/atp-agent.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public readonly isAuthenticated$ = new BehaviorSubject<boolean>(false);
  public readonly did$ = new BehaviorSubject<string | undefined>(undefined);

  constructor(private readonly agent: AtpAgent) {}

  public get did() {
    return this.did$.getValue();
  }

  public get isAuthenticated() {
    return this.isAuthenticated$.getValue();
  }

  async login(identifier: string, password: string) {
    const response = await this.agent.login({ identifier, password });

    if (response.success) {
      this.isAuthenticated$.next(true);
      this.did$.next(response.data.did);
    } else {
      this.isAuthenticated$.next(false);
      this.did$.next(undefined);
    }

    return response;
  }
}
