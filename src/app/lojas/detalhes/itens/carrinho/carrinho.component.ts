import { Component, OnInit, Input } from "@angular/core";
import { CarrinhoComprasService } from "../../../../services/carrinho-compras/carrinho-compras.service";
import { ProdutoVenda } from "src/app/models/produto-venda.model";

@Component({
  selector: "app-carrinho",
  templateUrl: "./carrinho.component.html",
  styleUrls: ["./carrinho.component.scss"]
})
export class CarrinhoComponent implements OnInit {
  constructor(private _carrinhoComprasService: CarrinhoComprasService) {}

  @Input() itensCarrinho: Array<ProdutoVenda>;

  // identificaLojasDiferentes: boolean = this._carrinhoComprasService.identificaLojasDiferentes

  ngOnInit() {
    // console.log(this.itensCarrinho);

    // console.log(this.itensCarrinho)
  }

  removerItem(produto) {
    this._carrinhoComprasService.removerItem(produto)
  }

  limparCarrinho() {
    this._carrinhoComprasService.limparCarrinho()
  }

}
