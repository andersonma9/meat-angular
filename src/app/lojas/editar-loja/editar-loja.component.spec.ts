import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarLojaComponent } from './editar-loja.component';

describe('EditarLojaComponent', () => {
  let component: EditarLojaComponent;
  let fixture: ComponentFixture<EditarLojaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarLojaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarLojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
