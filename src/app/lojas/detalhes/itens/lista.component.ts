import { Component, OnInit } from "@angular/core";
import { LojasService } from "../../../services/lojas/lojas.service";
import { ProdutosModel } from "../../../models/produtos.model";
import { ProdutoVenda } from '../../../models/produto-venda.model';
import { CarrinhoComprasService } from '../../../services/carrinho-compras/carrinho-compras.service';
import {
  Router,
  ActivatedRoute,
  Route,
  ActivatedRouteSnapshot
} from "@angular/router";

@Component({
  selector: "app-menu",
  templateUrl: "./lista.component.html",
  styleUrls: ["./lista.component.scss"]
})
export class MenuComponent implements OnInit {
  produtos: ProdutosModel;
  itensCarrinho: Array<ProdutoVenda>;

  constructor(
    private _lojasService: LojasService,
    private _activatedRoute: ActivatedRoute,
    private _carrinhoComprasService: CarrinhoComprasService
  ) {}

  produtoImg: string;

  ngOnInit() {
    // this.produtos.length = 0;
    let lojaId = this._activatedRoute.parent.snapshot.params["id"];
    this.itensLoja(lojaId);

    // recebendo os dados do carrinho de compras
    if (localStorage.getItem("itensCarrinho")) {
      // this.itensCarrinho = JSON.parse(localStorage.getItem("itensCarrinho"));
      // this._carrinhoComprasService.itensCarrinho = JSON.parse(localStorage.getItem("itensCarrinho"));
      this.itensCarrinho = this._carrinhoComprasService.itensCarrinho
      // console.log(this.itensCarrinho);
    } else {
      this.itensCarrinho.length = 0;
      // console.log(this.itensCarrinho);
    }
  }

  itensLoja(lojaId) {
    this._lojasService.itensLoja(lojaId).subscribe(produtos => {
      this.produtos = produtos;
      // console.log(this.produtos.length);
    });
  }
}
