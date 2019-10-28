import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ContentChild
} from "@angular/core";
import { DetalhesComponent } from "../../lojas/detalhes/detalhes.component";

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

  constructor() {}

  listaLojas: object[] = [  
    { nome: "Loja 1", id: "1" },
    { nome: "Loja 2", id: "2" },
    { nome: "Loja 3", id: "3" }
  ];

  ngOnInit() {}

  clickHandler() {
    // console.log(this.opened)
    if (this.opened === true) {
      this.opened = false;
      this.reflectOpened.emit(this.opened);
    }
  }
}
