import { Component, OnInit, ViewChild } from "@angular/core";
import { FormComponent } from "./form/form.component";
import { FormGroup } from "@angular/forms";
import { ItensPedidoComponent } from "./itens-pedido/itens-pedido.component";

@Component({
  selector: "app-pedido",
  templateUrl: "./pedido.component.html",
  styleUrls: ["./pedido.component.scss"]
})
export class PedidoComponent implements OnInit {
  constructor() {}
  @ViewChild(FormComponent, { static: true })
  private _formComponent: FormComponent;

  @ViewChild(ItensPedidoComponent, { static: false })
  private _itensPedidoComponent: ItensPedidoComponent;

  formPedido: FormGroup;
  ngOnInit() {
    // this.formPedido = this._formComponent.infoPedido;
  }

  enviarCompra() {
    // this._formComponent.seeForm();
    // this.formPedido = this._formComponent.infoPedido.value
    // console.log(this._itensPedidoComponent.dataSource)
    this._formComponent.infoPedido.controls["itensPedido"].patchValue(this._itensPedidoComponent.dataSource)
    console.log(this._formComponent.infoPedido.value)
    // console.log(this._formComponent.infoPedido.value);
  }
}
