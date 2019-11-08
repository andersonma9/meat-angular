import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ProdutosModel } from "../../../../models/produtos.model";
import { ProdutoVenda } from "../../../../models/produto-venda.model";
import { CarrinhoComprasService } from "../../../../services/carrinho-compras/carrinho-compras.service";
import { ActivatedRoute } from "@angular/router";
import { environment } from 'src/environments/environment';
import { LoginService } from '../../../../services/login/login.service';



@Component({
  selector: "app-itens",
  templateUrl: "./itens.component.html",
  styleUrls: ["./itens.component.scss"]
})
export class ItensComponent implements OnInit {
  @Input() produto: ProdutosModel;
  produtoImg;

  @Output() itemBadgeIndicador = new EventEmitter();

  api: string

  constructor(
    private _carrinhoCompras: CarrinhoComprasService,
    private _activatedRoute: ActivatedRoute,
    private _loginService: LoginService
  ) {
    this.api = environment.apiUrl
  }

  ngOnInit() {}

  adicionarProduto(produto: ProdutoVenda, quantidade: string) {
    if (this._carrinhoCompras.itensCarrinho.length != 0) {
      // console.log("há itens no carrinho");
      if (this._carrinhoCompras.itensCarrinho[0].loja !== produto.loja) {
        this._carrinhoCompras.identificaLojasDiferentes = true;
        // console.log('Lojas diferentes')
      } else {
        let nova_quantidade = parseInt(quantidade);
        this._carrinhoCompras.adicionarItem(produto, nova_quantidade);
      }
    } else {
      let nova_quantidade = parseInt(quantidade);
      this._carrinhoCompras.adicionarItem(produto, nova_quantidade);
    }
  }
  
}
