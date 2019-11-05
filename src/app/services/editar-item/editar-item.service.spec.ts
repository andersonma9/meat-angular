import { TestBed } from '@angular/core/testing';

import { EditarItemService } from './editar-item.service';

describe('EditarItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditarItemService = TestBed.get(EditarItemService);
    expect(service).toBeTruthy();
  });
});
