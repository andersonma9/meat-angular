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

  constructor(private _lojasService: LojasService) { }

  ngOnInit() {
    this.listaLojas();
  }

  listaLojas() {
    this._lojasService
      .listaLojas()
      .subscribe(lojas => {
        // console.log(lojas.results);
        this.lojas = lojas.results;
      });
  }
}
