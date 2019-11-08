import { Component, OnInit } from "@angular/core";
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
export class EditarItemComponent implements OnInit {
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

  ngOnInit() {

    this.dadosProduto = this._fb.group({
      descricao: this._fb.control('', Validators.required),
      id: this._fb.control('', Validators.required),
      loja: this._fb.control('', Validators.required),
      qtd_estoque: this._fb.control('', Validators.required),
      valor: this._fb.control('', Validators.required)
    })

    const lojaId = this._activatedRoute.parent.snapshot.params["id"];
    this._editarItemService.listaProdutos(lojaId).subscribe(produtos => {
      // console.log(produtos);
      this.produtos = produtos;
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

    // console.log(this.dadosProduto.value)
  }



  editarProduto(dadosProduto: ProdutosModel) {
    this._editarItemService.editarItem(dadosProduto.id, dadosProduto).subscribe(
      res => {
        const lojaId = this._activatedRoute.parent.snapshot.params["id"];
        this._editarItemService.listaProdutos(lojaId).subscribe(produtos => {
          // console.log(produtos);
          this.produtos = produtos;
        });
      }
    )
    this.produtoEditado = true;
    // console.log(this.produtoEditado)
  }

  navigationStatus() {
    return this._navigationInfoService.navStart
  }

}
