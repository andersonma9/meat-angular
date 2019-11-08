import { ErrorHandler, Injectable, NgZone } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar, MatSnackBarRef } from "@angular/material/snack-bar";

import { LoginService } from "./services/login/login.service";
import { HeaderService } from "./services/header.service";

import { LoginComponent } from "./application-menus/login/login.component";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(
    private _loginService: LoginService,
    private _headerService: HeaderService,
    private _snackBar: MatSnackBar,
    private _zone: NgZone,
    public dialog: MatDialog
  ) {}

  snackRef;

  handleError(error) {
    // console.log(error);

    this._zone.run(() => {
      switch (error.status) {
        case 401:
          // console.log(error);
          if (error.error.detail === "Signature has expired.") {
            this._loginService.logout();
            this.openNotification(
              "Sua sessão Expirou!",
              "Realizar login novamente"
            );
          } else if (
            error.error.detail ===
            "As credenciais de autenticação não foram fornecidas."
          ) {
            this.openNotification(
              "Ação permitida somente para usuários autorizados",
              "Realizar Login"
            );
          }
          break;
        case 403:
          this.openNotification(
            "Usuário ou senha incorretos",
            "Tente novamente!"
          );

          break;
        case 400:
            this._snackBar.open('Por favor, verifique as informações inseridas', 'Fechar', {
              duration: 2000
            })
        break
      }
    });

    // IMPORTANT: Rethrow the error otherwise it gets swallowed
    // throw new Error('Eu sou um erro');
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
      console.log("The dialog was closed");
    });
  }
}
