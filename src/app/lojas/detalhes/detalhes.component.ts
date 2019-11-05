import { Component, OnInit, NgZone } from "@angular/core";
import { ResponsiveService } from "src/app/responsive.service";
import { Router, ActivatedRoute } from "@angular/router";
import { LojasService } from "../../services/lojas/lojas.service";
import { LojaModel } from "../../models/loja.model";

@Component({
  selector: "app-detalhes",
  templateUrl: "./detalhes.component.html",
  styleUrls: ["./detalhes.component.scss"]
})
export class DetalhesComponent implements OnInit {
  constructor(
    private _responsiveService: ResponsiveService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _lojasService: LojasService,
    private _zone: NgZone
  ) {}

  idLoja;

  loja: LojaModel = new LojaModel();

  centerCardTitle() {
    return !this._responsiveService
      .checkScreen(960)
      .subscribe(breakPoint => console.log(breakPoint.matches));
  }

  ngOnInit() {
    // console.log(this._activatedRoute.snapshot.params['id'])
    this.idLoja = this._activatedRoute.snapshot.params["id"];
    this._lojasService.lojaById(this.idLoja).subscribe(dadosLoja => {
      this._zone.run(() => {
        this.loja = dadosLoja;
      });
      // console.log(this.loja.nome_fantasia);
      // console.log(dadosLoja);
    });
  }

  setLoja() {
    return this._activatedRoute.snapshot.params;
  }
}
