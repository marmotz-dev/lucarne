import { TestBed } from '@angular/core/testing';

import { AtpAgent } from './atp-agent.service';

describe('AgentService', () => {
  let service: AtpAgent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtpAgent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
