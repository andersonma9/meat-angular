import { Component, OnInit } from "@angular/core";
import { LojasService } from "../services/lojas/lojas.service";
import { LojaModel } from "../models/loja.model";
import { tap } from "rxjs/operators";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";
import { PaginatorModel } from '../models/paginator.model';

@Component({
  selector: "app-restaurantes",
  templateUrl: "./lojas.component.html",
  styleUrls: ["./lojas.component.scss"],
  animations: [
    trigger('lojasReady', [
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate('0.5s', style({
          opacity: 1
        }))
      ])
    ])
  ]
})
export class LojasComponent implements OnInit {
  lojas: LojaModel;

  lojasTrigger: string = 'ready'

  // paginador

  paginas: Array<number> = [];

  param: number;

  pageInfo: PaginatorModel;

  // paginador

  constructor(private _lojasService: LojasService) { }

  ngOnInit() {
    this.listaLojas();
  }

  listaLojas() {
    this._lojasService
      .listaLojas()
      .subscribe(lojas => {
        console.log(lojas);
        this.lojas = lojas.results;
      });
  }

  // previousPage() {
  //   if (this.param === this.paginas[0]) {
  //     document.getElementById('previous').setAttribute('disabled', 'true')
  //   }
  //   // this.paginas = [];
  //   this.param -= 1;
  //   this.itensLoja(this.lojaId, this.param)
  //   this._router.navigate(['loja', this.lojaId], { queryParams: { page: this.param } })
  //   // this.checkButton()
  // }

  // nextPage() {
  //   if (this.param === this.paginas[this.paginas.length - 1]) {
  //     document.getElementById('next').setAttribute('disabled', 'true')
  //   }
  //   // this.paginas = [];
  //   this.param += 1;
  //   this._router.navigate(['loja', this.lojaId], { queryParams: { page: this.param } })
  //   this.itensLoja(this.lojaId, this.param)
  //   // this.checkButton()
  // }

  // nagivateToPage(pag) {
  //   // this.paginas = [];
  //   this._router.navigate(['loja', this.lojaId], { queryParams: { page: pag } })
  //   this.itensLoja(this.lojaId, pag)
  // }
}
