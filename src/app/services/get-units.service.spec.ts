import { TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { GetUnitsService } from './get-units.service';

describe('GetUnitsService', () => {
  let service: GetUnitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(GetUnitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
