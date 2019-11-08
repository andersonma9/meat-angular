import { NgModule } from "@angular/core";
import { CommonModule, CurrencyPipe } from "@angular/common";
import { PedidoRoutingModule } from "./pedido-routing.module";
import { AvaliacaoPedidoComponent } from "./avaliacao-pedido/avaliacao-pedido.component";
import { FinalizacaoComponent } from "./finalizacao/finalizacao.component";
import { FormComponent } from "./finalizacao/form/form.component";
import { ItensPedidoComponent } from "./finalizacao/itens-pedido/itens-pedido.component";
import { PedidoComponent } from "./pedido.component";
import { MaterialModule } from "../material/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from '../shared/shared/shared.module';
import { FormasPagamentoComponent } from './finalizacao/fechamento/formas-pagamento/formas-pagamento.component';
import { ResumoPedidoComponent } from './finalizacao/fechamento/resumo-pedido/resumo-pedido.component';
import { FechamentoComponent } from './finalizacao/fechamento/fechamento.component';

@NgModule({
  declarations: [
    AvaliacaoPedidoComponent,
    FormasPagamentoComponent,
    ResumoPedidoComponent,
    FechamentoComponent,
    FinalizacaoComponent,
    FormComponent,
    ItensPedidoComponent,
    PedidoComponent,
  ],
  imports: [
    CommonModule,
    PedidoRoutingModule,
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: []
})
export class PedidoModule {}
