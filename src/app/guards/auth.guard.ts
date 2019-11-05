import { Injectable, NgZone } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  CanLoad,
  Route
} from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "../services/login/login.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog } from "@angular/material/dialog";
import { LoginComponent } from "../application-menus/login/login.component";
// import { Route } from "@angular/compiler/src/core";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private _loginService: LoginService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog // private _state: RouterStateSnapshot
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // console.log("Guarda ativa!");

    let url: string = state.url;

    if (this.checkUser()) {
      // console.log("logado");

      // this._router.navigate([url])
      return true;
    }
    this.openNotification(
      "Você precisa estar logado para continuar!",
      "Login!"
    );
    // console.log(url);

    this._loginService.redirectUrl = url;

    return false;
  }

  checkUser() {
    return this._loginService.isLogged();
  }

  openNotification(mensagem: string, acao) {
    let snackRef = this._snackBar.open(mensagem, acao, { duration: 3000 });

    snackRef.onAction().subscribe(() => {
      this.abrirDialogoLogin();
    });
  }

  abrirDialogoLogin(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: "350px",
      data: { nome: "Anderson" }
    });
    dialogRef.afterClosed().subscribe(result => {
      // console.log("The dialog was closed");
    });
  }

  canLoad(url: Route): boolean {
    // console.log(url);
    if (this._loginService.isLogged()) {
      return true;
    }
    this.openNotification(
      "Você precisa estar logado para continuar!",
      "Login!"
    );
    this._loginService.redirectUrl = `/${url.path}`
    return false;
  }
}
