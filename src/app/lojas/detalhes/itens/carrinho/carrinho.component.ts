import { Component, OnInit, Input } from "@angular/core";
import { CarrinhoComprasService } from "../../../../services/carrinho-compras/carrinho-compras.service";
import { ProdutoVenda } from "src/app/models/produto-venda.model";
import { trigger, transition, keyframes, style, animate } from '@angular/animations';

@Component({
  selector: "app-carrinho",
  templateUrl: "./carrinho.component.html",
  styleUrls: ["./carrinho.component.scss"],
  animations: [
    trigger('itensAnimation', [
      transition(':enter', [
        animate('0.3s', keyframes([
          style({
            opacity: 0,
            transform: "TranslateX(-10%)",
            offset: 0
          }),
          style({
            opacity: 0.8,
            transform: "TranslateX(4%)",
            offset: 0.8
          }),
          style({
            opacity: 1,
            transform: "TranslateX(0)",
            offset: 1
          })
        ]))
      ]),
      transition(':leave', [
        animate('0.3s', keyframes([
          style({
            opacity: 1,
            transform: 'TranslateX(0)',
            offset: 0
          }),
          style({
            opacity: 0.8, 
            transform: 'TranslateX(4%)',
            offset: 0.2
          }),
          style({
            opacity: 0,
            transform: 'TranslateX(-10%)',
            offset: 1
          })
        ]))
      ])
    ]),
    trigger('emptyCart', [
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate('0.3s', style({
          opacity: 1
        }))
      ])
    ])
  ]
})
export class CarrinhoComponent implements OnInit {
  constructor(private _carrinhoComprasService: CarrinhoComprasService) {

  }

  @Input() itensCarrinho: Array<ProdutoVenda>;


  ngOnInit() { }


  removerItem(produto) {
    this._carrinhoComprasService.removerItem(produto)
  }

  limparCarrinho() {
    this._carrinhoComprasService.limparCarrinho()
  }

}
