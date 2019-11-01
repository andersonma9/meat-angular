import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";

import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { UserModel } from "../../application-menus/cadastro-usuario/user.model";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
@Injectable({
  providedIn: "root"
})
export class CadastroUsuarioService {
  api: string;

  constructor(private _httpClient: HttpClient) {
    this.api = environment.apiUrl;
  }

  cadastrarUsuario(dadosUsuario) {
    return this._httpClient.post(`${this.api}/clientes/`, dadosUsuario);
  }
}
