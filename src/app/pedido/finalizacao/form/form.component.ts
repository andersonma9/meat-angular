import { Component, OnInit, Input, NgZone } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { timer } from "rxjs";
import { UserModel } from "../../../application-menus/cadastro-usuario/user.model";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
  constructor(private _fb: FormBuilder, private _zone: NgZone) {}

  infoPedido: FormGroup;

  @Input() dadosClientes: UserModel;

  ngOnInit() {
    this._zone.run(() => {
      this.infoPedido = this._fb.group({
        dadosCliente: this._fb.group({
          nome: this._fb.control(this.dadosClientes.nome, [
            Validators.required
          ]),
          sobrenome: this._fb.control(this.dadosClientes.sobrenome, [
            Validators.required
          ]),
          email: this._fb.control(this.dadosClientes.user.email, [
            Validators.required,
            Validators.email
          ])
        }),
        dadosEntrega: this._fb.group({
          rua: this._fb.control(this.dadosClientes.endereco.rua, [
            Validators.required
          ]),
          numero: this._fb.control(this.dadosClientes.endereco.numero_casa, [
            Validators.required
          ]),
          complemento: this._fb.control(
            this.dadosClientes.endereco.complemento
          ),
          cidade: this._fb.control(this.dadosClientes.endereco.cidade, [
            Validators.required
          ]),
          bairro: this._fb.control(this.dadosClientes.endereco.bairro, [
            Validators.required
          ]),
          uf: this._fb.control(this.dadosClientes.endereco.uf, [
            Validators.required,
            Validators.maxLength(2)
          ])
        }),
        itensPedido: this._fb.control("", [Validators.required])
      });
    });

    // console.log(this.dadosClientes);
  }

  seeForm() {
    console.log(this.infoPedido.value);
  }
}
