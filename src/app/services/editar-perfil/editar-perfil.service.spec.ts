import { TestBed } from '@angular/core/testing';

import { EditarPerfilService } from './editar-perfil.service';

describe('EditarPerfilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditarPerfilService = TestBed.get(EditarPerfilService);
    expect(service).toBeTruthy();
  });
});
