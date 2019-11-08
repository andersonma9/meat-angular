import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-perfil',
  templateUrl: './forms-perfil.component.html',
  styleUrls: ['./forms-perfil.component.scss']
})
export class FormsPerfilComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute, private _fb: FormBuilder) { }

  editarPerfil: FormGroup;

  cadastrarUsuario: FormGroup;

  ngOnInit() {
    this.checkFormToUse();
  }

  checkFormToUse() {
    let url = this._activatedRoute.snapshot.url[0].path;

    if (url.includes('editar-perfil')) {
      this.formEditarPerfil();
      return true;
    } else {
      this.formCadastrarUsuario();
    }
    return false;
  }

  formEditarPerfil() {
    this.editarPerfil = this._fb.group({
      user: this._fb.group({
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
    })
  }

  formCadastrarUsuario() {
    this.cadastrarUsuario = this._fb.group({
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

}
