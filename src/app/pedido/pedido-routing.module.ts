import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PedidoComponent } from "./pedido.component";
import { FinalizacaoComponent } from "./finalizacao/finalizacao.component";
import { AvaliacaoPedidoComponent } from "./avaliacao-pedido/avaliacao-pedido.component";
import { AuthGuard } from '../guards/auth.guard';


const pedidoRoutes: Routes = [
  {
    path: "",
    component: PedidoComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        children: [
          { path: "", redirectTo: "/pedido/finalizacao", pathMatch: "full" },
          { path: "finalizacao", component: FinalizacaoComponent },
          { path: "avaliacao", component: AvaliacaoPedidoComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(pedidoRoutes)],
  exports: [RouterModule]
})
export class PedidoRoutingModule {}
