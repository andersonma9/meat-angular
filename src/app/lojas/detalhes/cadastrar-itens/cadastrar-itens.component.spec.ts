import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarItensComponent } from './cadastrar-itens.component';

describe('CadastrarItensComponent', () => {
  let component: CadastrarItensComponent;
  let fixture: ComponentFixture<CadastrarItensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarItensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
