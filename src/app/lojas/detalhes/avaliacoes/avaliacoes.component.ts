import { Component, OnInit } from '@angular/core';
import { CarrinhoComprasService } from 'src/app/services/carrinho-compras/carrinho-compras.service';

@Component({
  selector: 'app-avaliacoes',
  templateUrl: './avaliacoes.component.html',
  styleUrls: ['./avaliacoes.component.scss']
})
export class AvaliacoesComponent implements OnInit {

  constructor(private _carrinhoComprasService: CarrinhoComprasService) { }

  ngOnInit() {
  }

  

}
