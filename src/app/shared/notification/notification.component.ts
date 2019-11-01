import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.scss"]
})
export class NotificationComponent implements OnInit {
  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit() {}

  openNotification(mensagem, acao) {
    this._snackBar.open(mensagem, acao, {
      duration: 3000
    });
  }
}
