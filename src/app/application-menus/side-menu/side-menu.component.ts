import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ContentChild,
  ChangeDetectorRef
} from "@angular/core";
import { DetalhesComponent } from "../../lojas/detalhes/detalhes.component";
import { LojaModel } from 'src/app/models/loja.model';
import { LojasService } from '../../services/lojas/lojas.service';
import { LoginService } from '../../services/login/login.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: "app-side-menu",
  templateUrl: "./side-menu.component.html",
  styleUrls: ["./side-menu.component.scss"]
})
export class SideMenuComponent implements OnInit {
  @Input() opened: boolean;

  @Input() mode: string;

  @Output() reflectOpened: EventEmitter<boolean> = new EventEmitter();

  @ContentChild(DetalhesComponent, { static: false })
  private _lojaDetalhe: DetalhesComponent;

  constructor(private _lojasService: LojasService, private _loginService: LoginService, private _cd: ChangeDetectorRef) { }

  listaLojas: Array<LojaModel>;

  param: number;

  pages: number;

  ngOnInit() {
    this.param = 1;

    this.getLojas(this.param, '')

    this._cd.detectChanges()
  }

  getLojas(param, search) {
    this._lojasService.listaLojas(param, search).subscribe(lojas => {
      // console.log(lojas)
      this.pages = lojas.total_pages;
      this.listaLojas = lojas.results

    })
  }

  loadLojas() {
    if (this.param === this.pages - 1) {
      document.getElementById('editAddButton').setAttribute('disabled', 'true')
      document.getElementById('cadastroAddButton').setAttribute('disabled', 'true')
    }
    this.param += 1;
    this._lojasService.listaLojas(this.param, '').pipe(
      tap(
        res => {
          // console.log(this.listaLojas)
          res.results.forEach(element => {
            this.listaLojas.push(element)
          });
          // console.log(this.listaLojas)
        }
      )
    ).subscribe()
  }

  clickHandler() {
    // console.log(this.opened)
    if (this.opened === true) {
      this.opened = false;
      this.reflectOpened.emit(this.opened);
    }
  }

  loggedUser(): boolean {
    return this._loginService.isLogged()
  }
}
