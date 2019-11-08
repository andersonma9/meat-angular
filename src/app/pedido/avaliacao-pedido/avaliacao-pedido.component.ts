import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { PedidoComponent } from "../pedido.component";
import { CarrinhoComprasService } from "../../services/carrinho-compras/carrinho-compras.service";
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AvaliacaoService } from 'src/app/services/avaliacao-service/avaliacao.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: "app-avaliacao-pedido",
  templateUrl: "./avaliacao-pedido.component.html",
  styleUrls: ["./avaliacao-pedido.component.scss"]
})
export class AvaliacaoPedidoComponent implements OnInit, AfterViewInit {
  constructor(private _carrinhoComprasService: CarrinhoComprasService,
              private _router: Router, private _fb: FormBuilder,
              private _avaliacaoService: AvaliacaoService,
              private _snack: MatSnackBar) { }

  notas: Array<number> = [1, 2, 3, 4, 5];

  ngOnInit() {
    //     for(var i in localStorage)
    // {
    //     console.log(i);
    // }
  }

  ngAfterViewInit() {
    // console.log(this._pedidoComponent)
    console.log(this._carrinhoComprasService.infoPedidoAvaliacao);
  }

  enviarAvaliacao(slider, comentario) {
    let avaliacao = this._fb.group({
      rating: this._fb.control(slider, Validators.required),
      comentario: this._fb.control(comentario, Validators.required),
      loja: this._fb.control(this._carrinhoComprasService.itensCarrinho[0].loja)
    })
    this._avaliacaoService.sendReview(avaliacao.value).subscribe(
      res => console.log(res)
    )
    // this._carrinhoComprasService.itensCarrinho = [];
    // localStorage.removeItem('itensCarrinho')
    this._carrinhoComprasService.limparCarrinho()
    this._snack.open('Obrigado pela sua compra!', 'Fechar', {
      duration: 2000
    })
    this._router.navigate([''])
  }
}
