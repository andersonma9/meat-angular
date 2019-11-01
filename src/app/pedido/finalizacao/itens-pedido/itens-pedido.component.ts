import { Component, OnInit, Input } from "@angular/core";
import { ProdutosModel } from "../../../models/produtos.model";
import { CarrinhoComprasService } from '../../../services/carrinho-compras/carrinho-compras.service';

@Component({
  selector: "app-itens-pedido",
  templateUrl: "./itens-pedido.component.html",
  styleUrls: ["./itens-pedido.component.scss"]
})
export class ItensPedidoComponent implements OnInit {
  constructor(private _carrinhoComprasService: CarrinhoComprasService) {}

  @Input() itensPedido: Array<ProdutosModel>;
  dataSource;
  displayedColumns: string[] = ["nome", "valor", "quantidade", "total"];

  ngOnInit() {
    // console.log(this.itensPedido)
    this.dataSource = this.itensPedido;
  }

  total() {
    return this._carrinhoComprasService.total()
  }
}
