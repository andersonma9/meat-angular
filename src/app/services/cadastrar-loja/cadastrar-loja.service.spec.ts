import { TestBed } from '@angular/core/testing';

import { CadastrarLojaService } from './cadastrar-loja.service';

describe('CadastrarLojaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CadastrarLojaService = TestBed.get(CadastrarLojaService);
    expect(service).toBeTruthy();
  });
});
