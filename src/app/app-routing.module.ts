import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LojasComponent } from "./lojas/lojas.component";
import { SobreComponent } from "./sobre/sobre.component";
import { DetalhesComponent } from "./lojas/detalhes/detalhes.component";
import { MenuComponent } from "./lojas/detalhes/itens/lista.component";
import { AvaliacoesComponent } from "./lojas/detalhes/avaliacoes/avaliacoes.component";
import { PedidoComponent } from "./pedido/pedido.component";
import { AdicionarComponent } from "./lojas/adicionar/adicionar.component";
import { EditarLojaComponent } from './lojas/editar-loja/editar-loja.component';
import { CadastrarItensComponent } from './lojas/detalhes/cadastrar-itens/cadastrar-itens.component';
import { CadastroUsuarioComponent } from './application-menus/cadastro-usuario/cadastro-usuario.component';

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
      { path: 'editar', component: EditarLojaComponent},
      { path: 'cadastro-item', component: CadastrarItensComponent}
    ]
  },
  {
    path: "lojas/adicionar",
    component: AdicionarComponent
  },
  {
    path: "pedido",
    component: PedidoComponent
  },
  {
    path: "lojas",
    component: LojasComponent
  },
  {
    path: "sobre",
    component: SobreComponent
  },
  {
    path: "cadastro",
    component: CadastroUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
