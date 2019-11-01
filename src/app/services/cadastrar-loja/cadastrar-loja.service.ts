import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HeaderService } from "../header.service";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";
import { LojaModel } from "src/app/models/loja.model";

@Injectable({
  providedIn: "root"
})
export class CadastrarLojaService {
  api: string;

  constructor(
    private _httpClient: HttpClient,
    private _headerService: HeaderService
  ) {
    this.api = environment.apiUrl;
  }

  cadastrarLoja(dadosLoja): Observable<LojaModel> {
    let cnpj = dadosLoja.cnpj;

    let plainnedCnpj = cnpj
      .replace("-", "")
      .replace("/", "")
      .replace(".", "")
      .replace(".", "");

    // console.log(plainnedCnpj);
    dadosLoja.cnpj = plainnedCnpj;
    // console.log(dadosLoja);
    return this._httpClient.post<LojaModel>(`${this.api}/lojas/`, dadosLoja, {
      headers: this._headerService.httpOptions.headers
    });
  }
}
