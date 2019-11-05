import { Component, OnInit, Input } from "@angular/core";
import { ProdutosModel } from "../../../../models/produtos.model";
import { ProdutoVenda } from "../../../../models/produto-venda.model";
import { CarrinhoComprasService } from "../../../../services/carrinho-compras/carrinho-compras.service";
import { ActivatedRoute } from "@angular/router";
import { environment } from 'src/environments/environment';


@Component({
  selector: "app-itens",
  templateUrl: "./itens.component.html",
  styleUrls: ["./itens.component.scss"]
})
export class ItensComponent implements OnInit {
  @Input() produto: ProdutosModel;
  produtoImg;

  api: string

  constructor(
    private _carrinhoCompras: CarrinhoComprasService,
    private _activatedRoute: ActivatedRoute
  ) {
    this.api = environment.apiUrl
  }

  ngOnInit() {
    // let randomNumber = Math.floor(Math.random() * 100);
    // this.produtoImg = `https://picsum.photos/id/${randomNumber}/200/200`;
    // console.log(this.produtoImg)

    // console.log(this.produto)
    // this.produtoImg = `${this.api}/produto.logo`;

    // if (
    //   this._carrinhoCompras.itensCarrinho[0].loja !==
    //   this._activatedRoute.parent.snapshot["id"]
    // ) {
    //   this._carrinhoCompras.identificaLojasDiferentes = true;
    //   // console.log('Lojas diferentes')
    // }
  }

  adicionarProduto(produto: ProdutoVenda, quantidade: string) {
    // console.log(this._activatedRoute.parent.snapshot.params['id'])
    // console.log(this._carrinhoCompras.identificaLojasDiferentes);

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
