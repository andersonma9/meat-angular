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
  logo;

  lojasTrigger: string = 'ready'

  constructor(private _lojasService: LojasService) {}

  ngOnInit() {
    // for (let i = 0; i < 21; i++) {
    //   // console.log(i)
    //   const randomNumber = Math.floor(Math.random() * 100);
    //   this.listaLojas.push({
    //     nome: `Loja ${i}`,
    //     logo: `https://picsum.photos/id/${randomNumber}/200/200`
    //   });
    // }
    const randomNumber = Math.floor(Math.random() * 100);

    this.logo = `https://picsum.photos/id/${randomNumber}/200/200`;

    this.listaLojas();
  }

  listaLojas() {
    this._lojasService
      .listaLojas()
      .pipe(
        tap(lojas => {
          for (let loja of lojas.results) {
            const randomNumber = Math.floor(Math.random() * 100);
            loja.logo = `https://picsum.photos/id/${randomNumber}/200/200`;
            // console.log(loja);
          }
        })
      )
      .subscribe(lojas => {
        // console.log(lojas.results);
        this.lojas = lojas.results;
      });
  }
}
