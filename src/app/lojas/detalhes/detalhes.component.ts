import { Component, OnInit, NgZone, ChangeDetectorRef } from "@angular/core";
import { ResponsiveService } from "src/app/responsive.service";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { LojasService } from "../../services/lojas/lojas.service";
import { LojaModel } from "../../models/loja.model";
import { LoginService } from '../../services/login/login.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { filter } from 'rxjs/operators';
import { NavigationInfoService } from 'src/app/services/navigation-info/navigation-info.service';

@Component({
  selector: "app-detalhes",
  templateUrl: "./detalhes.component.html",
  styleUrls: ["./detalhes.component.scss"],
  animations: [
    trigger('detalhesAppeard', [
      transition(':enter', [
        style({
          opacity: 0,
          // transform: 'TranslateX(-5%)'
        }),
        animate('0.5s ease-in', style({
          opacity: 1,
          // transform: 'TranslateX(0%)'
        }))
      ])
    ]),
    trigger('loadingGone', [
      transition(':leave', [
        style({
          opacity: 1,
          transform: 'TranslateX(0)'
        }),
        animate('0.5s ease-in', style({
          opacity: 0,
          transform: 'TranslateX(-10%)'
        }))
      ])
    ])
  ]
})
export class DetalhesComponent implements OnInit {
  constructor(
    private _responsiveService: ResponsiveService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _lojasService: LojasService,
    private _zone: NgZone,
    private _loginService: LoginService,
    private _cd: ChangeDetectorRef,
    private _navigationInfoService: NavigationInfoService
  ) { }

  idLoja;

  loja: LojaModel = new LojaModel();

  ngOnInit() {

    //  receber dados da loja no início do componente 
    this.idLoja = this._activatedRoute.snapshot.params["id"];
    this._lojasService.lojaById(this.idLoja).subscribe(dadosLoja => {
      this.loja = dadosLoja;
    });
    //  receber dados da loja no início do componente \\\\\\\\\\\\\\\\


    // atualizar dados da loja dinamicamente
    this._activatedRoute.params.subscribe(param => {
      this._lojasService.lojaById(param.id).subscribe(dadosLoja => {
        this.loja = dadosLoja;
      })
    })
    // atualizar dados da loja dinamicamente \\\\\\\\\\\\\\\\ 
  }

  setLoja() {
    return this._activatedRoute.snapshot.params;
  }

  loadingStatus() {
    return this._navigationInfoService.navStart;
  }
}
