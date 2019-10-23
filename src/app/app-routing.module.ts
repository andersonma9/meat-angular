import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { SobreComponent } from './sobre/sobre.component';
import { DetalhesComponent } from './restaurantes/detalhes/detalhes.component';
import { MenuComponent } from './restaurantes/detalhes/menu/menu.component';
import { AvaliacoesComponent } from './restaurantes/detalhes/avaliacoes/avaliacoes.component';
import { PedidoComponent } from './pedido/pedido.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'restaurantes/detalhes', component: DetalhesComponent,
    children: [
      {path: '', redirectTo: 'menu', pathMatch: 'full'},
      {path: 'menu', component: MenuComponent},
      {path: 'avaliacoes', component: AvaliacoesComponent}
    ]
  },
  {
    path: 'pedido', component: PedidoComponent
  },
  {
    path: 'restaurantes', component: RestaurantesComponent
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
