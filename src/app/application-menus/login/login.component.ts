import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginService } from "../../services/login/login.service";
import { HeaderService } from "../../services/header.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private _fb: FormBuilder,
    private _loginService: LoginService
  ) {}

  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = this._fb.group({
      username: this._fb.control("", [Validators.required]),
      password: this._fb.control("", [Validators.required])
    });
  }

  login(dadosLogin) {
    this._loginService.login(dadosLogin).subscribe(dados => {});
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  fecharModalLogin() {
    this.dialogRef.close();
  }
}
