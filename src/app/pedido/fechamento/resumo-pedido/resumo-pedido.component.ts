import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-resumo-pedido",
  templateUrl: "./resumo-pedido.component.html",
  styleUrls: ["./resumo-pedido.component.scss"]
})
export class ResumoPedidoComponent implements OnInit {
  itensPedido: Array<object>;
  dataSource;
  displayedColumns: string[] = ["frete", "valorProdutos", "total"];

  constructor() {}

  ngOnInit() {
    this.dataSource = this.itensPedido = [
      {
        frete: "R$ 10,00",
        valorProdutos: "R$ 3,50",
        total: "R$ 109,10"
      }
    ];
  }
}
