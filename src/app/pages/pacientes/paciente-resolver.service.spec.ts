import { TestBed } from '@angular/core/testing';

import { PacienteResolverService } from './paciente-resolver.service';

describe('PacienteResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PacienteResolverService = TestBed.get(PacienteResolverService);
    expect(service).toBeTruthy();
  });
});
