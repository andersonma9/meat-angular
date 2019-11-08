import { TestBed } from '@angular/core/testing';

import { NavigationInfoService } from './navigation-info.service';

describe('NavigationInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavigationInfoService = TestBed.get(NavigationInfoService);
    expect(service).toBeTruthy();
  });
});
