import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LojasService } from "../../services/lojas/lojas.service";
import { ActivatedRoute } from "@angular/router";
import { LojaModel } from "../../models/loja.model";

@Component({
  selector: "app-editar-loja",
  templateUrl: "./editar-loja.component.html",
  styleUrls: ["./editar-loja.component.scss"]
})
export class EditarLojaComponent implements OnInit {
  constructor(
    private _fb: FormBuilder,
    private _lojasService: LojasService,
    private _activatedRoute: ActivatedRoute
  ) {}

  dadosLoja: FormGroup;

  lojaId: number;


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

    this.lojaId = this._activatedRoute.parent.snapshot.params["id"];

    this._lojasService
      .lojaById(this.lojaId)
      .subscribe(loja => {
        this.dadosLoja.get("razao_social").patchValue(loja.razao_social);
        this.dadosLoja.get("nome_fantasia").patchValue(loja.nome_fantasia);
        this.dadosLoja.get("cnpj").patchValue(loja.cnpj);
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

  editarLoja(dadosLoja, lojaId) {
    this._lojasService.editarLoja(lojaId, dadosLoja).subscribe();
  }
}
