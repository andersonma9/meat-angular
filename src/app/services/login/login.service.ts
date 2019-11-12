import { Injectable, ɵConsole, Injector } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

import { environment } from "../../../environments/environment";
import { HeaderService } from "../header.service";

import { DadosLogin } from "../../models/dados-login.model";
import { LoginResponse } from "../../models/login-response";
import { LoggedUser } from "../../models/logged-user.model";
import { UsuarioAtivo } from "../../models/usuario-ativo.model";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class LoginService /* extends HeaderService */ {
  api;
  header;

  loggedUser: LoggedUser;

  userInfo: UsuarioAtivo;

  redirectUrl: string;

  constructor(
    private _httpClient: HttpClient,
    private _headerService: HeaderService,
    private _injector: Injector
  ) {
    // super();
    this.api = environment.apiUrl;
    this.loggedUser = this.loggedUser;
  }

  isLogged(): boolean {
    return this.loggedUser != undefined;
  }

  login(dadosLogin): Observable<LoginResponse> {
    return this._httpClient
      .post<LoginResponse>(`${this.api}/login/`, dadosLogin)
      .pipe(
        tap(loginResponse => {
          this.loggedUser = loginResponse;
          this._headerService.httpOptions.headers = this._headerService.httpOptions.headers.set(
            "Authorization",
            "JWT " + loginResponse.token
          );
          localStorage.setItem("loggedUser", JSON.stringify(this.loggedUser));
         
          this.clienteInfo(loginResponse.cliente).subscribe(dados => {
            // console.log(dados)
            this.userInfo = dados;
            localStorage.setItem("userInfo", JSON.stringify(this.userInfo));
          });

          let router = this._injector.get(Router);
          if (this.redirectUrl) {
            router.navigate([this.redirectUrl]);
          }
        })
      );
  }

  tokenRefresh(token) {
    return this._httpClient.post(`${this.api}/refresh-token/`, token);
  }

  logout() {
    this.loggedUser = undefined;
    localStorage.removeItem("loggedUser");
    localStorage.removeItem("userInfo");
    // window.location.reload()
    this.redirectUrl = "";
    let router = this._injector.get(Router);
    router.navigate([this.redirectUrl]);
    this._headerService.httpOptions.headers = this._headerService.httpOptions.headers.set(
      "Authorization",
      ""
    );
    // console.log(this._headerService.httpOptions.headers)
  }

  clienteInfo(id): Observable<UsuarioAtivo> {
    return this._httpClient.get<UsuarioAtivo>(`${this.api}/clientes/${id}`, {
      headers: this._headerService.httpOptions.headers
    });
  }
}
