import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { timer } from "rxjs";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
  constructor(private _fb: FormBuilder) {}

  infoPedido: FormGroup;

  ngOnInit() {
    this.infoPedido = this._fb.group({
      dadosCliente: this._fb.group({
        nome: this._fb.control("", [Validators.required]),
        sobrenome: this._fb.control("", [Validators.required]),
        email: this._fb.control("", [Validators.required, Validators.email])
      }),
      dadosEntrega: this._fb.group({
        rua: this._fb.control("", [Validators.required]),
        numero: this._fb.control("", [Validators.required]),
        complemento: this._fb.control(""),
        cidade: this._fb.control("", [Validators.required]),
        bairro: this._fb.control("", [Validators.required]),
        uf: this._fb.control("", [Validators.required, Validators.maxLength(2)])
      }),
      itensPedido: this._fb.control('',[Validators.required])
    });
  }

  seeForm() {
    console.log(this.infoPedido.value)
  }
}
