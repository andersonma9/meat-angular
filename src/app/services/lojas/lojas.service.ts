import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { ProdutosModel } from "../../models/produtos.model";

import { LojaModel } from "../../models/loja.model";

import { Observable } from "rxjs";
import { ListaLojasModel } from "../../models/lista-lojas.model";
import { HeaderService } from "../header.service";

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

  listaLojas(): Observable<ListaLojasModel> {
    return this._httpClient.get<ListaLojasModel>(`${this.api}/lojas/`);
  }

  lojaById(id): Observable<LojaModel> {
    return this._httpClient.get<LojaModel>(`${this.api}/lojas/${id}`);
  }

  editarLoja(id, dadosLoja: LojaModel): Observable<LojaModel> {
    return this._httpClient.patch<LojaModel>(
      `${this.api}/lojas/${id}/`,
      dadosLoja,
      { headers: this._headerService.httpOptions.headers }
    );
  }

  itensLoja(lojaId): Observable<ProdutosModel> {
    return this._httpClient.get<ProdutosModel>(
      `${this.api}/lojas/${lojaId}/produtos`
    );
  }
}
