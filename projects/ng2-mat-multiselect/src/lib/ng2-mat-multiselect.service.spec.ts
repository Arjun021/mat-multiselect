import { TestBed } from '@angular/core/testing';

import { Ng2MatMultiselectService } from './ng2-mat-multiselect.service';

describe('Ng2MatMultiselectService', () => {
  let service: Ng2MatMultiselectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ng2MatMultiselectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
