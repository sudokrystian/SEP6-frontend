import { TestBed } from '@angular/core/testing';

import { ListDialogService } from './list-dialog.service';

describe('ListDialogService', () => {
  let service: ListDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
