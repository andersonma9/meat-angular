import { Component, OnInit } from '@angular/core';
import { CarrinhoComprasService } from 'src/app/services/carrinho-compras/carrinho-compras.service';
import { LojasService } from 'src/app/services/lojas/lojas.service';
import { ActivatedRoute } from '@angular/router';
import { AvaliacaoModel } from 'src/app/models/avaliacao.model';

@Component({
  selector: 'app-avaliacoes',
  templateUrl: './avaliacoes.component.html',
  styleUrls: ['./avaliacoes.component.scss']
})
export class AvaliacoesComponent implements OnInit {

  constructor(private _carrinhoComprasService: CarrinhoComprasService, private _lojasService: LojasService,
    private _activatedRoute: ActivatedRoute) { }

  lojaId;
  avaliacoes: Array<AvaliacaoModel>
  ngOnInit() {
    this.lojaId = this._activatedRoute.snapshot.parent.params.id;
    this.getAvaliacoes(this.lojaId)
  }

  getAvaliacoes(id) {
    this._lojasService.avaliacoesLoja(id).subscribe(
      avaliacoes => {
        this.avaliacoes = avaliacoes.results;
        console.log(this.avaliacoes)
      }
    )
  }



}
