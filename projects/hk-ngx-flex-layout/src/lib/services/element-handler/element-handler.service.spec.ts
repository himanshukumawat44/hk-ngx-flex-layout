import { TestBed } from '@angular/core/testing';

import { ElementHandlerService } from './element-handler.service';

describe('ElementHandlerService', () => {
  let service: ElementHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElementHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
