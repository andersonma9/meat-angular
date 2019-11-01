import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { UserModel } from "src/app/application-menus/cadastro-usuario/user.model";
import { HeaderService } from "../header.service";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class EditarPerfilService {
  api: string;

  constructor(
    private _httpClient: HttpClient,
    private _headerService: HeaderService
  ) {
    this.api = environment.apiUrl;
  }

  editarPefil(dadosUsuario, id): Observable<UserModel> {
    return this._httpClient.patch<UserModel>(
      `${this.api}/clientes/${id}/`,
      dadosUsuario,
      { headers: this._headerService.httpOptions.headers }
    );
  }
}
