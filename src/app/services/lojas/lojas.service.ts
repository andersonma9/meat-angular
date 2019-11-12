import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { ProdutosModel } from "../../models/produtos.model";

import { LojaModel } from "../../models/loja.model";

import { Observable } from "rxjs";
import { ListaLojasModel } from "../../models/lista-lojas.model";
import { HeaderService } from "../header.service";
import { CategoryModel } from 'src/app/models/category.model';
import { AvaliacaoModel } from 'src/app/models/avaliacao.model';

@Injectable({
  providedIn: "root"
})
export class LojasService {
  api: string;

  constructor(
    private _httpClient: HttpClient,
    private _headerService: HeaderService
  ) {
    this.api = environment.apiUrl;
  }

  listaCategorias: string = '';
  tags = new EventEmitter;

  listaLojas(page?, search?: ''): Observable<ListaLojasModel> {
    return this._httpClient.get<ListaLojasModel>(`${this.api}/lojas`, {params: {page: page, search: search}});
  }

  lojaById(id): Observable<LojaModel> {
    return this._httpClient.get<LojaModel>(`${this.api}/lojas/${id}`);
  }

  avaliacoesLoja(id): Observable<AvaliacaoModel> {
    return this._httpClient.get<AvaliacaoModel>(`${this.api}/lojas/${id}/avaliacoes`)
  }

  editarLoja(id, dadosLoja: LojaModel): Observable<LojaModel> {
    return this._httpClient.patch<LojaModel>(
      `${this.api}/lojas/${id}/`,
      dadosLoja,
      { headers: this._headerService.httpOptions.headers }
    );
  }

  itensLoja(lojaId, page?:'1', cat?): Observable<ProdutosModel> {
    return this._httpClient.get<ProdutosModel>( 
      `${this.api}/lojas/${lojaId}/produtos`, {params: {page: page, tags: this.listaCategorias}}
    );
  }

  categoriasLojas(id): Observable<Array<CategoryModel>> {
    return this._httpClient.get<Array<CategoryModel>>(`${this.api}/lojas/${id}/categorias/`)
  }

  setCategoria(categorias) {
    this.listaCategorias = categorias;
    this.tags.emit(this.listaCategorias)

  }

}
