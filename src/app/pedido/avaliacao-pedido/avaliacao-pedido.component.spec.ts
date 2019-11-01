import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoPedidoComponent } from './avaliacao-pedido.component';

describe('AvaliacaoPedidoComponent', () => {
  let component: AvaliacaoPedidoComponent;
  let fixture: ComponentFixture<AvaliacaoPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvaliacaoPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliacaoPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
