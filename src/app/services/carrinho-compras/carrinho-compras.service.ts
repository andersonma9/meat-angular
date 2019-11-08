import { Injectable } from "@angular/core";
import { ProdutoVenda } from "src/app/models/produto-venda.model";
import { VendaModel } from "../../models/venda.model";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";
import { HeaderService } from "../header.service";

@Injectable({
  providedIn: "root"
})
export class CarrinhoComprasService {

  itemBadgeIndicator: string = 'normal';

  itensCarrinho: Array<ProdutoVenda>;

  somaTotal: number;

  api: string;

  infoPedidoAvaliacao: VendaModel;

  identificaLojasDiferentes: boolean

  constructor(
    private _httpClient: HttpClient,
    private _headerService: HeaderService
  ) {
    this.api = environment.apiUrl;
    this.itensCarrinho = []
    this.identificaLojasDiferentes = false
    if (localStorage.getItem("itensCarrinho")) {
      this.itensCarrinho = JSON.parse(localStorage.getItem("itensCarrinho"));
    } else {
      localStorage.setItem("itensCarrinho", JSON.stringify(this.itensCarrinho));
    }
    // console.log(this.itemBadgeIndicator)
  }

  adicionarItem(produto: ProdutoVenda, quantidade) {
   if (this.itensCarrinho.length === 0) {
      produto.qtd_item = quantidade;
      this.itensCarrinho.push(produto);
      this.itemBadgeIndicator = 'mudou';
      // console.log(this.itemBadgeIndicator)
      this.itemBadgeIndicator = 'normal';
      // console.log(this.itemBadgeIndicator)
    } else {
      let produtoAModificar = this.itensCarrinho.find(
        produtoCarrinho => produtoCarrinho.id === produto.id
      );
      if (produtoAModificar) {
        produtoAModificar.qtd_item += quantidade;
        this.itemBadgeIndicator = 'mudou';
        // console.log(this.itemBadgeIndicator)
        this.itemBadgeIndicator = 'normal';
        // console.log(this.itemBadgeIndicator)
      } else {
        produto.qtd_item = quantidade;
        this.itensCarrinho.push(produto);
        this.itemBadgeIndicator = 'mudou';
        // console.log(this.itemBadgeIndicator)
        this.itemBadgeIndicator = 'normal';
        // console.log(this.itemBadgeIndicator)
      }
    }

    localStorage.setItem("itensCarrinho", JSON.stringify(this.itensCarrinho));
    // console.log(this.itensCarrinho);
    this.total();
  }

  removerItem(produto: ProdutoVenda) {
    // console.log(this.itensCarrinho)
    let produtoADiminuir = this.itensCarrinho.find(
      produtoCarrinho => produtoCarrinho.id === produto.id
    );
    produtoADiminuir.qtd_item -= 1;
    this.itemBadgeIndicator = 'mudou';
      // console.log(this.itemBadgeIndicator)
      this.itemBadgeIndicator = 'normal';
      // console.log(this.itemBadgeIndicator)
    // console.log(produtoADiminuir);

    if (produtoADiminuir.qtd_item === 0) {
      let indiceRemover = this.itensCarrinho.indexOf(produtoADiminuir);
      this.itensCarrinho.splice(indiceRemover, 1);
      this.identificaLojasDiferentes = false;
      this.itemBadgeIndicator = 'normal';
    }

    localStorage.setItem("itensCarrinho", JSON.stringify(this.itensCarrinho));
    this.total();
  }

  limparCarrinho() {
    this.identificaLojasDiferentes = false;
    this.itensCarrinho.splice(0);
    // this.itensCarrinho = []
    // console.log(this.itensCarrinho.length)
    localStorage.setItem("itensCarrinho", JSON.stringify(this.itensCarrinho));
  }

  total() {
    let arraySoma = [];
    for (let produto of this.itensCarrinho) {
      let soma = produto.qtd_item * parseFloat(produto.valor);
      arraySoma.push(soma);
    }
    arraySoma.reduce((total, somar) => {
      return (this.somaTotal = total + somar);
    }, 0);

    // console.log(this.somaTotal);
    return this.somaTotal;
  }

  finalizarVenda(dadosVenda: VendaModel): Observable<VendaModel> {
    // console.log(dadosVenda.vendas_produto);
    return this._httpClient.post<VendaModel>(
      `${this.api}/vendas/`,
      dadosVenda,
      {
        headers: this._headerService.httpOptions.headers
      }
    );
  }
}
