import { TestBed } from '@angular/core/testing';

import { MessageShareService } from './message-share.service';

describe('MessageShareService', () => {
  let service: MessageShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageShareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
