import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LojasComponent } from './lojas/lojas.component';
import { SobreComponent } from './sobre/sobre.component';
import { DetalhesComponent } from './lojas/detalhes/detalhes.component';
import { MenuComponent } from './lojas/detalhes/itens/lista.component';
import { AvaliacoesComponent } from './lojas/detalhes/avaliacoes/avaliacoes.component';
import { PedidoComponent } from './pedido/pedido.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'lojas/detalhes', component: DetalhesComponent,
    children: [
      {path: '', redirectTo: 'itens', pathMatch: 'full'},
      {path: 'itens', component: MenuComponent},
      {path: 'avaliacoes', component: AvaliacoesComponent}
    ]
  },
  {
    path: 'pedido', component: PedidoComponent
  },
  {
    path: 'lojas', component: LojasComponent
  },
  {
    path: 'sobre', component: SobreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
