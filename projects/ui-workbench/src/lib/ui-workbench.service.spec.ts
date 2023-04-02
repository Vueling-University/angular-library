import { TestBed } from '@angular/core/testing';

import { UiWorkbenchService } from './ui-workbench.service';

describe('UiWorkbenchService', () => {
  let service: UiWorkbenchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiWorkbenchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
