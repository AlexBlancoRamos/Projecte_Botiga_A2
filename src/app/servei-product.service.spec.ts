import { TestBed } from '@angular/core/testing';

import { ServeiProductService } from './servei-product.service';

describe('ServeiProductService', () => {
  let service: ServeiProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeiProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
