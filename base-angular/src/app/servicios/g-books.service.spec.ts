import { TestBed, inject } from '@angular/core/testing';

import { GBooksService } from './g-books.service';

describe('GBooksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GBooksService]
    });
  });

  it('should be created', inject([GBooksService], (service: GBooksService) => {
    expect(service).toBeTruthy();
  }));
});
