import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosPessoaisComponent } from './infos-pessoais.component';

describe('InfosPessoaisComponent', () => {
  let component: InfosPessoaisComponent;
  let fixture: ComponentFixture<InfosPessoaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosPessoaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosPessoaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
