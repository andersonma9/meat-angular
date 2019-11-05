import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
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
    private _cadastrarLojaService: CadastrarLojaService,
    private _cd: ChangeDetectorRef
  ) {}

  dadosLoja: FormGroup;

  selectedFile: File;

  logoPreview = null;

  ngOnInit() {
    this.dadosLoja = this._fb.group({
      logo: this._fb.control("", [Validators.required]),
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
    // let formData = new FormData()
    console.log(dadosLoja);
    // formData.append('çpka');
    this._cadastrarLojaService
      .cadastrarLoja(dadosLoja)
      .subscribe(res => console.log(res));
  }

  onFileChanged(event) {

    // let formData = new FormData();

    // formData.append('logo', event.target.files[0], event.target.files[0].name)
    // this.dadosLoja.patchValue({logo: formData})


    // console.log(formData.get('logo'))

    // console.log(event);
    let reader = new FileReader();

    this.selectedFile = <File>event.target.files[0];
    reader.readAsDataURL(this.selectedFile);

    reader.onload = () => {
      this.dadosLoja.patchValue({ logo: reader.result });
      // console.log(reader.result)
      this.logoPreview = reader.result
    };



    // // this.logoPreview = atob(reader.result);

    // this._cd.markForCheck();
  }

  selecionaLogo() {
    // console.log('logo')
    let logoInput = document.getElementById('imageSelector')
    logoInput.click()
  }
}
