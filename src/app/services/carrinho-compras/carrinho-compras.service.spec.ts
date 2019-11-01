import { TestBed } from '@angular/core/testing';

import { CarrinhoComprasService } from './carrinho-compras.service';

describe('CarrinhoComprasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarrinhoComprasService = TestBed.get(CarrinhoComprasService);
    expect(service).toBeTruthy();
  });
});
