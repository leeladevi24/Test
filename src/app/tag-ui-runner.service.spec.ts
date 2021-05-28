import { TestBed } from '@angular/core/testing';

import { TagUIRunnerService } from './tag-ui-runner.service';

describe('TagUIRunnerService', () => {
  let service: TagUIRunnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TagUIRunnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
