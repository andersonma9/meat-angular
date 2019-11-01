import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

import { ProdutosModel } from "src/app/models/produtos.model";
import { environment } from "../../../environments/environment";
import { ProdutoCadastroModel } from "../../models/produto-cadastro.model";
import { HeaderService } from "../header.service";

@Injectable({
  providedIn: "root"
})
export class CadastroProdutosService {
  api: string;

  constructor(
    private _httpClient: HttpClient,
    private _headerService: HeaderService
  ) {
    this.api = environment.apiUrl;
  }

  cadastrarProduto(produto: ProdutoCadastroModel): Observable<ProdutosModel> {
    return this._httpClient.post<ProdutosModel>(
      `${this.api}/produtos/`,
      produto,
      { headers: this._headerService.httpOptions.headers }
    );
  }
}
