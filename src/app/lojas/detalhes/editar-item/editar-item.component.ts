import { Component, OnInit } from "@angular/core";
import { EditarItemService } from "src/app/services/editar-item/editar-item.service";
import { ActivatedRoute } from "@angular/router";
import { ProdutosModel } from "src/app/models/produtos.model";

@Component({
  selector: "app-editar-item",
  templateUrl: "./editar-item.component.html",
  styleUrls: ["./editar-item.component.scss"]
})
export class EditarItemComponent implements OnInit {
  constructor(
    private readonly _editarItemService: EditarItemService,
    private _activatedRoute: ActivatedRoute
  ) {}

  produtos: Array<ProdutosModel>;

  produtoEditar: ProdutosModel = null;

  ngOnInit() {
    const lojaId = this._activatedRoute.parent.snapshot.params["id"];
    this._editarItemService.listaProdutos(lojaId).subscribe(produtos => {
      console.log(produtos);
      this.produtos = produtos;
    });
  }

  selecionaProduto(produto) {
    this.produtoEditar = produto;
    console.log(produto)
  }
}
