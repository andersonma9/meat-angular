import { Component, OnInit, AfterContentInit, AfterViewInit } from "@angular/core";
import { EditarItemService } from "src/app/services/editar-item/editar-item.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ProdutosModel } from "src/app/models/produtos.model";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavigationInfoService } from 'src/app/services/navigation-info/navigation-info.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: "app-editar-item",
  templateUrl: "./editar-item.component.html",
  styleUrls: ["./editar-item.component.scss"],
  animations: [
    trigger('editarItensAppeard', [
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate('0.25s ease-in-out', style({
          opacity: 1
        }))
      ])
    ]),
    trigger('itemInfoAppeard', [
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate('0.25s', style({
          opacity: 1
        }))
      ])
    ]),
    trigger('noItemSelected', [
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
export class EditarItemComponent implements OnInit, AfterViewInit {
  constructor(
    private readonly _editarItemService: EditarItemService,
    private _activatedRoute: ActivatedRoute,
    private _fb: FormBuilder,
    private readonly _router: Router,
    private _navigationInfoService: NavigationInfoService
  ) { }

  produtos: Array<ProdutosModel>;

  produtoEditar: ProdutosModel = null;

  dadosProduto: FormGroup;

  logoPreview: any;

  imagemProduto = null;

  produtoEditado: boolean = false;

  lojaId: string;

  // paginação 

  param: number;

  paginas: Array<number> = [];

  lastPage: number;


  // paginação

  ngOnInit() {
    this.lojaId = this._activatedRoute.parent.snapshot.params.id;

    if (!this._activatedRoute.snapshot.queryParams.page) {
      this.param = 1;
    } else {
      this.param = parseInt(this._activatedRoute.snapshot.queryParams.page);
    }

    this.dadosProduto = this._fb.group({
      descricao: this._fb.control('', Validators.required),
      id: this._fb.control('', Validators.required),
      loja: this._fb.control('', Validators.required),
      qtd_estoque: this._fb.control('', Validators.required),
      valor: this._fb.control('', Validators.required)
    })

    const lojaId = this._activatedRoute.parent.snapshot.params["id"];

    this.getListaProdutos(lojaId, this.param)

  }
  ngAfterViewInit() {

  }

  getListaProdutos(lojaId, param) {
    this._editarItemService.listaProdutos(lojaId, param).pipe(
      tap(res => {
        if (this.paginas.length !== res.total_pages) {
          for (let i = 1; i <= res.total_pages; i += 1) {
            this.paginas.push(i)
          }
        }
        this.lastPage = this.paginas.lastIndexOf(res.total_pages);
      })
    ).subscribe(produtos => {
      this.produtos = produtos.results;
    });
  }

  selecionaProduto(produto) {
    this.produtoEditado = false;
    this.produtoEditar = produto;
    this.dadosProduto.patchValue({
      descricao: this.produtoEditar.descricao,
      id: this.produtoEditar.id,
      loja: this.produtoEditar.loja,
      qtd_estoque: this.produtoEditar.qtd_estoque,
      valor: this.produtoEditar.valor
    })
  }



  editarProduto(dadosProduto: ProdutosModel) {
    this._editarItemService.editarItem(dadosProduto.id, dadosProduto).pipe(
      tap(res => {
        const lojaId = this._activatedRoute.parent.snapshot.params["id"];
        this._editarItemService.listaProdutos(lojaId).subscribe(produtos => {
          this.produtos = produtos.results;
        });
      })
    ).subscribe()
    this.produtoEditado = true;
  }

  navigationStatus() {
    return this._navigationInfoService.navStart
  }

  // métodos paginação
  previousPage() {
    if (this.param === 1) {
      this._router.navigate(['loja', this.lojaId, 'editar-produtos'], { queryParams: { page: 1 } })
    } else if (this.param > 1) {
      this.param -= 1;
      this._router.navigate(['loja', this.lojaId, 'editar-produtos'], { queryParams: { page: this.param } })
      this.getListaProdutos(this.lojaId, this.param);
    }
  }

  nextPage() {
    if (this.param === (this.paginas[this.lastPage])) {
      this._router.navigate(['loja', this.lojaId, 'editar-produtos'], { queryParams: { page: this.param } })
    } else if (this.param < (this.paginas[this.lastPage])) {
      this.param += 1;
      this._router.navigate(['loja', this.lojaId, 'editar-produtos'], { queryParams: { page: this.param } })
      this.getListaProdutos(this.lojaId, this.param);
    }
  }

  nagivateToPage(pag) {
    this.param = pag;
    this._router.navigate(['loja', this.lojaId, 'editar-produtos'], { queryParams: { page: pag } })
    this.getListaProdutos(this.lojaId, pag)
  }
}