import { TestBed } from '@angular/core/testing';

import { UserRegisterStoreService } from './user-register-store.service';

describe('UserRegisterStoreService', () => {
  let service: UserRegisterStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRegisterStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
