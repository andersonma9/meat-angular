import { Component, OnInit, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private _fb: FormBuilder
  ) {}

  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = this._fb.group({
      email: this._fb.control('', [Validators.required, Validators.email]),
      senha: this._fb.control('', [Validators.required])
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
