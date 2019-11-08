import { Component, OnInit } from '@angular/core';
import { FormasPagamento } from './forma.model';


@Component({
  selector: 'app-formas-pagamento',
  templateUrl: './formas-pagamento.component.html',
  styleUrls: ['./formas-pagamento.component.scss']
})
export class FormasPagamentoComponent implements OnInit {

  constructor() { }

  formaPagamento: string;

  formasPagamento: Array<FormasPagamento> = [
    {
      nome: 'Débito',
      cod: 'DEB',
      id: 1
    },
    {
      nome: 'Crédito',
      cod: 'CRE',
      id: 2
    },
    {
      nome: 'Cartão Frota',
      cod: 'FRT',
      id: 3
    }
  ]

  ngOnInit() {
  }

  seeValue(valor) {
    console.log(valor)
  }

}
