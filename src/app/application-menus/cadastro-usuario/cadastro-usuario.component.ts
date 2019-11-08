import { Component, OnInit } from "@angular/core";
import { CadastroUsuarioService } from "../../services/cadastro-usuario/cadastro-usuario.service";
import {
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: "app-cadastro-usuario",
  templateUrl: "./cadastro-usuario.component.html",
  styleUrls: ["./cadastro-usuario.component.scss"]
})
export class CadastroUsuarioComponent implements OnInit {
  constructor(
    private _cadastroUsuario: CadastroUsuarioService,
    private _fb: FormBuilder,
    private _sn: MatSnackBar,
    private _router: Router
  ) {}

  cadastroForm: FormGroup;

  ngOnInit() {
    this.cadastroForm = this._fb.group({
      user: this._fb.group({
        username: this._fb.control("", [Validators.required]),
        password: this._fb.control("", [Validators.required]),
        email: this._fb.control("", [Validators.required, Validators.email])
      }),
      foto: this._fb.control('', [Validators.required]),
      nome: this._fb.control("", [Validators.required]),
      sobrenome: this._fb.control("", [Validators.required]),
      cpf: this._fb.control("", [Validators.required]),
      rg: this._fb.control("", [Validators.required]),
      data_nascimento: this._fb.control("", Validators.required),
      sexo: this._fb.control("", [Validators.required]),
      endereco: this._fb.group({
        bairro: this._fb.control("", [Validators.required]),
        rua: this._fb.control("", [Validators.required]),
        numero_casa: this._fb.control("", [Validators.required]),
        complemento: this._fb.control("", [Validators.required]),
        cep: this._fb.control("", [Validators.required]),
        cidade: this._fb.control("", [Validators.required]),
        uf: this._fb.control("", [Validators.required, Validators.maxLength(2)])
      })
    });
  }

  // receber foto de perfil

  onFileChange(event) {

    let file = <File> event.target.files[0];

    let fr = new FileReader();
    fr.readAsDataURL(file);
    fr.onload = () => {
      this.cadastroForm.patchValue({
        foto: fr.result
      })
      console.log(this.cadastroForm.value)
    }
  }

  // receber foto de perfil

  cadastrarUsuario(dadosUsuario) {
    this._cadastroUsuario
      .cadastrarUsuario(dadosUsuario)
      .subscribe(dados => {
        this._sn.open('Cadastro realizado com sucesso!', '', {
          duration: 2000
        })
        this._router.navigate([''])
      });
  }
}
