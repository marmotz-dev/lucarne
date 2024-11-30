import { TestBed } from '@angular/core/testing';

import { AtProtoService } from './at-proto.service';

describe('AtProtoService', () => {
  let service: AtProtoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtProtoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
