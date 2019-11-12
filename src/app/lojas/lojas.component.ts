import { Component, OnInit } from "@angular/core";
import { LojasService } from "../services/lojas/lojas.service";
import { LojaModel } from "../models/loja.model";
import { tap, debounceTime, distinctUntilChanged } from "rxjs/operators";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";
import { PaginatorModel } from '../models/paginator.model';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

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

  lastPage: number;

  // paginador

  searchForm: FormGroup;

  options: LojaModel[] = [];

  constructor(private _lojasService: LojasService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _fb: FormBuilder) { }

  ngOnInit() {
    this._router.navigate(['/lojas'], { queryParams: { page: 1 } })
    if (this._activatedRoute.snapshot.queryParams.page) {
      this.param = parseInt(this._activatedRoute.snapshot.queryParams.page)
      // console.log(this.param)
    } else {
      // console.log('Parâmetro padrão')
      this.param = 1;
      // console.log(this.param)
    }
    this.listaLojas(this.param, '')

    this.searchForm = this._fb.group({
      pesquisa: this._fb.control('')
    })

    this.searchLojas()

  }

  searchLojas() {
    // this.searchForm.get('pesquisa').valueChanges.subscribe(
    //   pesquisa => console.log(pesquisa)
    // )
    this.searchForm.get('pesquisa').valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(
      pesquisa => {
        this._lojasService.listaLojas(this.param, pesquisa).subscribe(
          lojas => {
            let array = lojas.results.map(item => {
              return item.nome_fantasia
            })
            if(pesquisa == '' && this.options.length > 0) {
              array = [];
              this.listaLojas(this.param, '')
            }
            this.options = array;
            if (this.options.length == 1) {
              this.listaLojas(this.param, this.options[0])
            }
            // console.log(array)
            // console.log(this.options)
          }
        )
      }
    )
  }

  listaLojas(param, search) {
    this._lojasService
      .listaLojas(param, search).pipe(
        tap(
          res => {
            // console.log(res)
            this.paginas = [];
            // console.log(res.total_pages)
            for (let i = 1; i <= res.total_pages; i += 1) {
              this.paginas.push(i);
            };
            // console.log(this.param)
            this.lastPage = this.paginas.indexOf(res.total_pages);

          }
        )
      )
      .subscribe(lojas => {
        // console.log(lojas);
        this.lojas = lojas.results;


      });
  }

  previousPage() {

    if (this.param === 1) {
      this._router.navigate(['lojas'], { queryParams: { page: this.param } })
    } else if (this.param > 1) {
      this.param -= 1;
      this.listaLojas(this.param, '');
      this._router.navigate(['lojas'], { queryParams: { page: this.param } })
    }

  }

  nextPage() {
    /* if (this.param === this.paginas[0]) {
      document.getElementById('previous').removeAttribute('disabled')
    }
    if (this.param === (this.paginas[this.lastPage] - 1)) {
      document.getElementById('next').setAttribute('disabled', 'true')
    } */
    if (this.param === this.paginas[this.lastPage]) {
      this._router.navigate(['lojas'], { queryParams: { page: this.param } })
    } else if (this.param < this.paginas[this.lastPage]) {
      this.param += 1;
      this._router.navigate(['lojas'], { queryParams: { page: this.param } })
      this.listaLojas(this.param, '')
    }
  }

  nagivateToPage(pag) {
    this.param = pag;
    this._router.navigate(['lojas'], {
      queryParams: {
        page: this.param
      }
    });
    this.listaLojas(pag, '')

    if (pag !== this.paginas[0]) {
      document.getElementById('previous').removeAttribute('disabled')
    } else if (pag === this.paginas[0]) {
      document.getElementById('previous').setAttribute('disabled', 'true')
    }

    if (pag === this.paginas[this.lastPage]) {
      document.getElementById('next').setAttribute('disabled', 'true')
    } else if (pag !== this.paginas[this.lastPage]) {
      document.getElementById('next').removeAttribute('disabled')
    }
  }

}
