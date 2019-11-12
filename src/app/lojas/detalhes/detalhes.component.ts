import { Component, OnInit, NgZone, ChangeDetectorRef, ViewChild } from "@angular/core";
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
import { filter, tap } from 'rxjs/operators';
import { NavigationInfoService } from 'src/app/services/navigation-info/navigation-info.service';
import { CategoryModel } from 'src/app/models/category.model';
import { MenuComponent } from './itens/lista.component';

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

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  idLoja;

  loja: LojaModel = new LojaModel();

  lojaId: string;

  pageParam;

  listaCategorias: Array<CategoryModel>;

  categoryParam: CategoryModel[] = [];

  previousPage: string | number;
  activePage: string | number;

  ngOnInit() {
    // console.log(this._menuComponent)
    this.activePage = this._activatedRoute.snapshot.params.id;
    this.lojaId = this._activatedRoute.snapshot.params.id
    this._activatedRoute.queryParams.subscribe(res => this.pageParam = res.page)

    //  receber dados da loja no início do componente 
    this.idLoja = this._activatedRoute.snapshot.params["id"];
    this._lojasService.lojaById(this.idLoja).subscribe(dadosLoja => {
      this.loja = dadosLoja;
    });
    //  receber dados da loja no início do componente \\\\\\\\\\\\\\\\


    // atualizar dados da loja dinamicamente
    this._activatedRoute.params.subscribe(param => {
      this._lojasService.lojaById(param.id)/* .pipe(
        tap(
          res => {
            this.previousPage = this.activePage;
            this.activePage = res.id;

            if (this.previousPage != this.activePage) {
              this.categoriasLojas(res.id)
              this.categoryParam.length = 0 
            }
          }
        )
      ) */.subscribe(dadosLoja => {
        this.loja = dadosLoja;
      })
    })
    // atualizar dados da loja dinamicamente \\\\\\\\\\\\\\\\ 

    this.categoriasLojas(this.lojaId);
  }

  categoriasLojas(id) {
    this._lojasService.categoriasLojas(id).subscribe(
      categories => {
        this.listaCategorias = categories;
      }
    )
  }

  setLoja() {
    return this._activatedRoute.snapshot.params;
  }

  loadingStatus() {
    return this._navigationInfoService.navStart;
  }

  adicionarRemover(categoria) {

    // let param = this._activatedRoute.snapshot.queryParams.page;

    let foundItem = this.categoryParam.findIndex((item) => item === categoria.slug);
    if (foundItem === -1) {
      this.categoryParam.push(categoria.slug);
      this._lojasService.setCategoria(this.categoryParam.join());
    } else {
      this.categoryParam.splice(foundItem, 1)
      this._lojasService.setCategoria(this.categoryParam.join());
    }



  }
  onActivate(componentReference) {
    this._lojasService.tags.subscribe(res => {
      this.pageParam = 1;
      if (res !== '') {
        this._router.navigate(['loja', this.lojaId], { queryParams: { page: 1, tags: res } })
      } else {
        this._router.navigate(['loja', this.lojaId], { queryParams: { page: 1 } })
      }
      componentReference.itensLoja(this.lojaId, this.pageParam, res);
    })
  }
}
