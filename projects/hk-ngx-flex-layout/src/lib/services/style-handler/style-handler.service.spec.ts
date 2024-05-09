import { TestBed } from '@angular/core/testing';

import { StyleHandlerService } from './style-handler.service';

describe('StyleHandlerService', () => {
  let service: StyleHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StyleHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
