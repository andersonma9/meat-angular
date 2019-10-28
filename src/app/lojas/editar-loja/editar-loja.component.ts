import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-editar-loja",
  templateUrl: "./editar-loja.component.html",
  styleUrls: ["./editar-loja.component.scss"]
})
export class EditarLojaComponent implements OnInit {
  constructor(private _fb: FormBuilder) {}

  dadosLoja: FormGroup;

  ngOnInit() {
    this.dadosLoja = this._fb.group({
      razaoSocial: this._fb.control("", [Validators.required]),
      nomeFantasia: this._fb.control("", [Validators.required]),
      cnpj: this._fb.control("", [
        Validators.required,
        Validators.minLength(14),
        Validators.maxLength(18)
      ])
    });
  }

  applyMask() {
    let masked = this.dadosLoja.controls["cnpj"].value.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
      "$1.$2.$3/$4-$5"
    );
    this.dadosLoja.controls["cnpj"].patchValue(masked);
    // console.log(this.dadosLoja.controls['cnpj'].errors)
  }

  editarLoja() {
    console.log('editou')
  }
}
