import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsPerfilComponent } from './forms-perfil.component';

describe('FormsPerfilComponent', () => {
  let component: FormsPerfilComponent;
  let fixture: ComponentFixture<FormsPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
