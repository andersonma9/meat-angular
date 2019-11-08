import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EditarPerfilService } from "../../services/editar-perfil/editar-perfil.service";
import { UserModel } from "../cadastro-usuario/user.model";
import { LoginService } from 'src/app/services/login/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NavigationInfoService } from 'src/app/services/navigation-info/navigation-info.service';

@Component({
  selector: "app-editar-perfil",
  templateUrl: "./editar-perfil.component.html",
  styleUrls: ["./editar-perfil.component.scss"]
})
export class EditarPerfilComponent implements OnInit {
  constructor(
    private _editarPerfil: EditarPerfilService,
    private _fb: FormBuilder,
    private _loginService: LoginService,
    private _snackBar: MatSnackBar,
    private _router: Router,
    private _navigationInfoService: NavigationInfoService
  ) { 
    this.selectedFile = null;
  }

  userInfo: any;

  edicaoPerfilForm: FormGroup;

  idCliente: number;

  selectedFile;

  fr = new FileReader();

  ngOnInit() {
      this.edicaoPerfilForm = this._fb.group({
      user: this._fb.group({
        // username: this._fb.control("", [Validators.required]),
        password: this._fb.control("", [Validators.required]),
        email: this._fb.control("", [Validators.required, Validators.email])
      }),
      // foto: this._fb.control(''),
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

    this.preencherForm();
    
  }

  onFileChange(event) {

    this.selectedFile = <File>event.target.files[0];

    
    this.fr.readAsDataURL(this.selectedFile);
    this.fr.onload = () => {
      this.edicaoPerfilForm.patchValue({
        foto: this.fr.result
      })
      // console.log(this.edicaoPerfilForm.value)
    }
  }

  preencherForm() {
    this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
    console.log(this.userInfo)
    this.edicaoPerfilForm
      .get("user.email")
      .patchValue(this.userInfo.user.email);


    this.edicaoPerfilForm.addControl('foto', this._fb.control(this.userInfo.foto));
    this.edicaoPerfilForm.get("nome").patchValue(this.userInfo.nome);
    this.edicaoPerfilForm.get("sobrenome").patchValue(this.userInfo.sobrenome);
    this.edicaoPerfilForm.get("cpf").patchValue(this.userInfo.cpf);
    this.edicaoPerfilForm.get("rg").patchValue(this.userInfo.rg);
    this.edicaoPerfilForm
      .get("data_nascimento")
      .patchValue(this.userInfo.data_nascimento);
    this.edicaoPerfilForm.get("sexo").patchValue(this.userInfo.sexo);

    this.edicaoPerfilForm
      .get("endereco.rua")
      .patchValue(this.userInfo.endereco.rua);
    this.edicaoPerfilForm
      .get("endereco.bairro")
      .patchValue(this.userInfo.endereco.bairro);
    this.edicaoPerfilForm
      .get("endereco.numero_casa")
      .patchValue(this.userInfo.endereco.numero_casa);
    this.edicaoPerfilForm
      .get("endereco.complemento")
      .patchValue(this.userInfo.endereco.complemento);
    this.edicaoPerfilForm
      .get("endereco.cep")
      .patchValue(this.userInfo.endereco.cep);
    this.edicaoPerfilForm
      .get("endereco.cidade")
      .patchValue(this.userInfo.endereco.cidade);
    this.edicaoPerfilForm
      .get("endereco.uf")
      .patchValue(this.userInfo.endereco.uf);
  }

  editarPefil(dadosUsuario: FormGroup, id) {
    // console.log(dadosUsuario);
    // console.log(this.selectedFile)
    let fileState = this.selectedFile instanceof File;
    // console.log(fileState)
    if(!fileState) {
      dadosUsuario.removeControl('foto')    
    }
    
    
    this._editarPerfil.editarPefil(dadosUsuario.value, id).subscribe(
      res => {
        this._snackBar.open('Perfil editado com sucesso', 'Fechar' , {
          duration: 2000
        })
        this._router.navigate([this._navigationInfoService.getPreviousUrl()])
      }
    );
  }
}
