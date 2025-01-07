import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AtpAgent } from '@app/lib/atproto/atp-agent.service';

export const authenticatedGuard: CanActivateFn = (route, state) => {
  const agent = inject(AtpAgent);
  const router = inject(Router);

  if (agent.hasSession) {
    return true;
  } else {
    localStorage.setItem('returnUrl', state.url);

    return router.navigate(['/']);
  }
};
