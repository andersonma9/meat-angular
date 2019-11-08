import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LojasComponent } from "./lojas/lojas.component";
import { SobreComponent } from "./sobre/sobre.component";
import { DetalhesComponent } from "./lojas/detalhes/detalhes.component";
import { MenuComponent } from "./lojas/detalhes/itens/lista.component";
import { AvaliacoesComponent } from "./lojas/detalhes/avaliacoes/avaliacoes.component";
import { AdicionarComponent } from "./lojas/adicionar/adicionar.component";
import { EditarLojaComponent } from "./lojas/detalhes/editar-loja/editar-loja.component";
import { CadastrarItensComponent } from "./lojas/detalhes/cadastrar-itens/cadastrar-itens.component";
import { CadastroUsuarioComponent } from "./application-menus/cadastro-usuario/cadastro-usuario.component";
import { EditarPerfilComponent } from "./application-menus/editar-perfil/editar-perfil.component";
import { AuthGuard } from "./guards/auth.guard";
import { EditarItemComponent } from './lojas/detalhes/editar-item/editar-item.component';
import { FormsPerfilComponent } from './shared/forms-perfil/forms-perfil.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "loja/:id",
    component: DetalhesComponent,
    children: [
      { path: "", redirectTo: "itens", pathMatch: "full" },
      { path: "itens", component: MenuComponent },
      { path: "avaliacoes", component: AvaliacoesComponent },
      { path: "editar", component: EditarLojaComponent },
      { path: "cadastro-item", component: CadastrarItensComponent },
      { path: 'editar-produtos', component: EditarItemComponent}
    ]
  },
  {
    path: "lojas/adicionar",
    component: AdicionarComponent
  },
  // { path: "pedido/avalie", component: AvaliacaoPedidoComponent },
  // {
  //   path: "pedido",
  //   component: PedidoComponent,
  //   children: [
  //     { path: "", redirectTo: "finalizacao", pathMatch: "full" },
  //     { path: "finalizacao", component: FinalizacaoComponent },
  //     { path: "avaliacao", component: AvaliacaoPedidoComponent }
  //   ]
  // },
  {
    path: "pedido",
    loadChildren: () =>
      import("./pedido/pedido.module").then(mod => mod.PedidoModule),
    canLoad: [AuthGuard]
  },
  {
    path: "lojas",
    component: LojasComponent
  },
  {
    path: "sobre",
    loadChildren: () =>
      import("./sobre/sobre.module").then(mod => mod.SobreModule)
  },
  {
    path: "cadastro",
    component: FormsPerfilComponent
  },
  {
    path: "editar-perfil",
    component: FormsPerfilComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
