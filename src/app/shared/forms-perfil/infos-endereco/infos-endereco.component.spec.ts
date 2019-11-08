import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosEnderecoComponent } from './infos-endereco.component';

describe('InfosEnderecoComponent', () => {
  let component: InfosEnderecoComponent;
  let fixture: ComponentFixture<InfosEnderecoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosEnderecoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
