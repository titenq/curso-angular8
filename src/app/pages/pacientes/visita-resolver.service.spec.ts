import { TestBed } from '@angular/core/testing';

import { VisitaResolverService } from './visita-resolver.service';

describe('VisitaResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VisitaResolverService = TestBed.get(VisitaResolverService);
    expect(service).toBeTruthy();
  });
});
