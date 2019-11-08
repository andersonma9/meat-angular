import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.scss']
})
export class ResumoComponent implements OnInit {

  @Input() editarPerfil: FormGroup;
  @Input() cadastrarUsuario: FormGroup;

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.checkFormToUse()
  }

  checkFormToUse() {
    let url = this._activatedRoute.snapshot.url[0].path;

    if (url.includes('editar-perfil')) {      
      return true;
    } else {      
    }
    return false;
  }

}
