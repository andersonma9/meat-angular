import { Component, OnInit } from "@angular/core";
import { CarrinhoComprasService } from 'src/app/services/carrinho-compras/carrinho-compras.service';



@Component({
  selector: "app-resumo-pedido",
  templateUrl: "./resumo-pedido.component.html",
  styleUrls: ["./resumo-pedido.component.scss"]
})
export class ResumoPedidoComponent implements OnInit {
  itensPedido: Array<object>;
  dataSource;
  displayedColumns: string[] = ["frete", "valorProdutos", "total"];

  constructor(private _carrinhoComprasService: CarrinhoComprasService) {}

  ngOnInit() {
    let frete = 10;
    this.dataSource = this.itensPedido = [
      {
        frete: frete,
        valorProdutos: this._carrinhoComprasService.somaTotal,
        total: frete  + this._carrinhoComprasService.somaTotal
      }
    ];
  }
}
