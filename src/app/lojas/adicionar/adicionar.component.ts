import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LojaModel } from "../../models/loja.model";
import { CadastrarLojaService } from "../../services/cadastrar-loja/cadastrar-loja.service";

@Component({
  selector: "app-adicionar",
  templateUrl: "./adicionar.component.html",
  styleUrls: ["./adicionar.component.scss"]
})
export class AdicionarComponent implements OnInit {
  constructor(
    private _fb: FormBuilder,
    private _cadastrarLojaService: CadastrarLojaService
  ) {}

  dadosLoja: FormGroup;

  ngOnInit() {
    this.dadosLoja = this._fb.group({
      razao_social: this._fb.control("", [Validators.required]),
      nome_fantasia: this._fb.control("", [Validators.required]),
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

  cadastrarLoja(dadosLoja: LojaModel) {
    this._cadastrarLojaService.cadastrarLoja(dadosLoja).subscribe();
  }
}
