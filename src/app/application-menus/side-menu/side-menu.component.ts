import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ContentChild
} from "@angular/core";
import { DetalhesComponent } from "../../lojas/detalhes/detalhes.component";
import { LojaModel } from 'src/app/models/loja.model';
import { LojasService } from '../../services/lojas/lojas.service';
import { LoginService } from '../../services/login/login.service';

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

  constructor(private _lojasService: LojasService, private _loginService: LoginService) {}

  listaLojas: Array<LojaModel>;

  

  ngOnInit() {
    this._lojasService.listaLojas().subscribe(lojas => {
      // console.log(lojas.results)
      this.listaLojas = lojas.results
    })
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
