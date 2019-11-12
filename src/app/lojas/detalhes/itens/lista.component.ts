import { Component, OnInit } from "@angular/core";
import { LojasService } from "../../../services/lojas/lojas.service";
import { ProdutosModel } from "../../../models/produtos.model";
import { ProdutoVenda } from '../../../models/produto-venda.model';
import { CarrinhoComprasService } from '../../../services/carrinho-compras/carrinho-compras.service';
import {
  Router,
  ActivatedRoute,
  Route,
  ActivatedRouteSnapshot
} from "@angular/router";
import { trigger, transition, style, animate } from '@angular/animations';
import { PaginatorModel } from 'src/app/models/paginator.model';
import { tap } from 'rxjs/operators';
import { CategoryModel } from 'src/app/models/category.model';

@Component({
  selector: "app-menu",
  templateUrl: "./lista.component.html",
  styleUrls: ["./lista.component.scss"],
  animations: [
    trigger('listaAppeard', [
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate('0.25s', style({
          opacity: 1
        }))
      ])
    ])
  ]
})
export class MenuComponent implements OnInit {
  produtos: ProdutosModel[];
  itensCarrinho: Array<ProdutoVenda>;

  constructor(
    private _lojasService: LojasService,
    private _activatedRoute: ActivatedRoute,
    private _carrinhoComprasService: CarrinhoComprasService,
    private _router: Router
  ) { }

  produtoImg: string;


  // paginador
  tags: string = this._lojasService.listaCategorias;

  lastPage: number;
  qtd_paginas: number;

  paginas: Array<number> = [];

  param: number;

  pageInfo: PaginatorModel;

  // paginador

  lojaId: number;

  ngOnInit() {

    if (this._activatedRoute.snapshot.queryParams.page) {
      this.param = parseInt(this._activatedRoute.snapshot.queryParams.page)
      // console.log(this.param)
    } else {
      // console.log('Parâmetro padrão')
      this.param = 1;
      // console.log(this.param)
    }

    this._activatedRoute.queryParams.subscribe(
      qp => {

      }
    )
    // this.produtos.length = 0;
    this.lojaId = this._activatedRoute.parent.snapshot.params["id"];
    // let firstParam = parseInt(this._activatedRoute.snapshot.queryParams.page);
    // this.param = firstParam;
    this.itensLoja(this.lojaId, this.param, this.tags);

    // recebendo os dados do carrinho de compras
    if (localStorage.getItem("itensCarrinho")) {
      this.itensCarrinho = this._carrinhoComprasService.itensCarrinho
    } else {
      this.itensCarrinho.length = 0;
    }


  }

  getTags() {
    // this.tags = tags;
    // console.log(this.tags)
  }
  itensLoja(lojaId, param, tags) {
    this._lojasService.itensLoja(lojaId, param, tags).pipe(
      tap(
        res => {
          this.produtos = res.results;
          // console.log(res)
          this.paginas = []
          if (res.total_pages > 0) {
            for (let i = 1; i <= res.total_pages; i++) {
              this.paginas.push(i)
            }
            if (this.paginas.length === 1) {
              document.getElementById('previous').setAttribute('disabled', 'true');
              document.getElementById('next').setAttribute('disabled', 'true')
            }
            this.lastPage = this.paginas.indexOf(res.total_pages)
          }
        }
      )
    ).subscribe(produtos => {
      if (this.param === 1) {
        // console.log('primeira página')
        document.getElementById('previous').setAttribute('disabled', 'true')
      } else if (this.param === this.paginas[this.lastPage]) {
        document.getElementById('next').setAttribute('disabled', 'true')
      }

    });
  }

  checkButton() {
    if (this.param === this.paginas[0]) {
      return true;
    } else if (this.param = this.paginas[this.paginas.length - 1]) {
      return false;
    }
  }

  previousPage() {
    document.getElementById('next').removeAttribute('disabled')
    if (this.param === this.paginas[0] + 1) {
      document.getElementById('previous').setAttribute('disabled', 'true')
    }
    this.param -= 1;
    this.itensLoja(this.lojaId, this.param, this.tags)
    this._router.navigate(['loja', this.lojaId], { queryParams: { page: this.param } })
  }

  nextPage() {
    let page = this.lastPage
    // console.log(this.paginas[this.lastPage])
    if (this.param === this.paginas[0]) {
      document.getElementById('previous').removeAttribute('disabled')
    }
    if (this.param === (this.paginas[this.lastPage] - 1)) {
      document.getElementById('next').setAttribute('disabled', 'true')
    }

    //   document.getElementById('next').setAttribute('disabled', 'true')

    this.param += 1;
    this._router.navigate(['loja', this.lojaId], { queryParams: { page: this.param } })
    this.itensLoja(this.lojaId, this.param, this.tags)
  }

  nagivateToPage(pag) {
    this.param = pag;
    let tags = ''/* this._activatedRoute.snapshot.queryParams.tags; */
    this._router.navigate(['loja', this.lojaId], { queryParams: { page: pag } })
    this.itensLoja(this.lojaId, pag, tags)


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
