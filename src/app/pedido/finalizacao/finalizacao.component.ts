import { Component, OnInit, ViewChild } from "@angular/core";
import { CarrinhoComprasService } from "src/app/services/carrinho-compras/carrinho-compras.service";
import { Router } from "@angular/router";
import { FormComponent } from "./form/form.component";
import { ItensPedidoComponent } from "./itens-pedido/itens-pedido.component";
import { UserModel } from "src/app/application-menus/cadastro-usuario/user.model";
import { ProdutoVenda } from "src/app/models/produto-venda.model";
import { FormGroup } from "@angular/forms";
import { VendaModel } from "src/app/models/venda.model";

@Component({
  selector: "app-finalizacao",
  templateUrl: "./finalizacao.component.html",
  styleUrls: ["./finalizacao.component.scss"]
})
export class FinalizacaoComponent implements OnInit {
  constructor(
    private _carrinhoComprasService: CarrinhoComprasService,
    private _router: Router
  ) {}
  @ViewChild(FormComponent, { static: true })
  private _formComponent: FormComponent;

  @ViewChild(ItensPedidoComponent, { static: false })
  private _itensPedidoComponent: ItensPedidoComponent;

  dadosClientes: UserModel;

  itensPedido: Array<ProdutoVenda>;

  formPedido: FormGroup;

  infoVenda: VendaModel;

  ngOnInit() {
    // this.formPedido = this._formComponent.infoPedido;

    this.dadosClientes = JSON.parse(localStorage.getItem("userInfo"));
    this.itensPedido = this._carrinhoComprasService.itensCarrinho;
    // console.log(this.dadosClientes)
  }

  enviarCompra() {
    // this._formComponent.seeForm();
    // this.formPedido = this._formComponent.infoPedido.value
    // console.log(this._itensPedidoComponent.dataSource)
    this._formComponent.infoPedido.controls["itensPedido"].patchValue(
      this._itensPedidoComponent.dataSource
    );
    // console.log(this._formComponent.infoPedido.value);
    // console.log(this._formComponent.infoPedido.value);

    // let infoItens;
    let arrayProdutos = [];

    for (let produto of this._carrinhoComprasService.itensCarrinho) {
      // console.log(produto.id)
      // console.log(produto.valor)
      let infoProduto = {
        produto: produto.id,
        valor: produto.valor,
        quantidade: produto.qtd_item
      };
      arrayProdutos.push(infoProduto);
    }
    // console.log(arrayProdutos)

    let dadosVenda = {
      loja: this._carrinhoComprasService.itensCarrinho[0].loja,
      vendas_produtos: arrayProdutos
    };
    // console.log(dadosVenda)
    this._carrinhoComprasService
      .finalizarVenda(dadosVenda)
      .pipe()
      .subscribe(pedido => {
        this.infoVenda = pedido;
        // console.log(this.infoVenda)
        this._carrinhoComprasService.infoPedidoAvaliacao = pedido;
        this._router.navigate(["/pedido/avaliacao"]);
      });
  }
}
