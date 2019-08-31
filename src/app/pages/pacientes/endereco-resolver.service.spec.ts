import { TestBed } from '@angular/core/testing';

import { EnderecoResolverService } from './endereco-resolver.service';

describe('EnderecoResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnderecoResolverService = TestBed.get(EnderecoResolverService);
    expect(service).toBeTruthy();
  });
});
