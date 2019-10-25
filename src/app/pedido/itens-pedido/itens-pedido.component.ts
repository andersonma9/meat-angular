import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itens-pedido',
  templateUrl: './itens-pedido.component.html',
  styleUrls: ['./itens-pedido.component.scss']
})
export class ItensPedidoComponent implements OnInit {

  constructor() { }

  itensPedido: Array<object>;
  dataSource;
  displayedColumns: string[] = ['nome', 'valor', 'quantidade'];

  ngOnInit() {
    this.dataSource = this.itensPedido = [
      {
        nome: 'Produto 1',
        valor: 'R$ 3,50',
        quantidade: 2
      },
      {
        nome: 'Produto 2',
        valor: 'R$ 13,50',
        quantidade: 1
      },
      {
        nome: 'Produto 3',
        valor: 'R$ 9,00',
        quantidade: 5
      },
      {
        nome: 'Produto 4',
        valor: 'R$ 10,90',
        quantidade: 4
      }
    ]
  }

}
