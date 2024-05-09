import { TestBed } from '@angular/core/testing';

import { BreakpointHandlerService } from './breakpoint-handler.service';

describe('BreakpointHandlerService', () => {
  let service: BreakpointHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreakpointHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
