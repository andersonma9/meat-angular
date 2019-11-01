import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { PedidoComponent } from "../pedido.component";
import { CarrinhoComprasService } from "../../services/carrinho-compras/carrinho-compras.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-avaliacao-pedido",
  templateUrl: "./avaliacao-pedido.component.html",
  styleUrls: ["./avaliacao-pedido.component.scss"]
})
export class AvaliacaoPedidoComponent implements OnInit, AfterViewInit {
  constructor(private _carrinhoComprasService: CarrinhoComprasService, private _router: Router) {}

  notas: Array<number> = [1, 2, 3, 4, 5];

  ngOnInit() {}

  ngAfterViewInit() {
    // console.log(this._pedidoComponent)
    console.log(this._carrinhoComprasService.infoPedidoAvaliacao);
  }

  enviarAvaliacao(slider, comentario){
    console.log(slider)
    console.log(comentario)
    this._router.navigate([''])
  }
}
