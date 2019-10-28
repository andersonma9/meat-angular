import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ApplicationMenusComponent } from "./application-menus/application-menus.component";
import { SideMenuComponent } from "./application-menus/side-menu/side-menu.component";
import { MaterialModule } from "./material/material.module";
import { ResponsiveService } from "./responsive.service";
import { LojasComponent } from "./lojas/lojas.component";
import { HomeComponent } from "./home/home.component";
import { SobreComponent } from "./sobre/sobre.component";
import { DetalhesComponent } from "./lojas/detalhes/detalhes.component";

import { AvaliacoesComponent } from "./lojas/detalhes/avaliacoes/avaliacoes.component";

import { PedidoComponent } from "./pedido/pedido.component";
import { FormComponent } from "./pedido/form/form.component";
import { ItensPedidoComponent } from "./pedido/itens-pedido/itens-pedido.component";
import { FechamentoComponent } from "./pedido/fechamento/fechamento.component";
import { MenuComponent } from "./lojas/detalhes/itens/lista.component";
import { ItensComponent } from "./lojas/detalhes/itens/itens/itens.component";
import { CarrinhoComponent } from "./lojas/detalhes/itens/carrinho/carrinho.component";
import { InputComponent } from "./shared/input/input.component";
import { FormasPagamentoComponent } from "./pedido/fechamento/formas-pagamento/formas-pagamento.component";
import { ResumoPedidoComponent } from "./pedido/fechamento/resumo-pedido/resumo-pedido.component";
import { LoginComponent } from './application-menus/login/login.component';
import { AdicionarComponent } from './lojas/adicionar/adicionar.component';
import { EditarLojaComponent } from './lojas/editar-loja/editar-loja.component';
import { CadastrarItensComponent } from './lojas/detalhes/cadastrar-itens/cadastrar-itens.component';
import { CadastroUsuarioComponent } from './application-menus/cadastro-usuario/cadastro-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationMenusComponent,
    SideMenuComponent,
    LojasComponent,
    HomeComponent,
    SobreComponent,
    DetalhesComponent,
    MenuComponent,
    AvaliacoesComponent,
    ItensComponent,
    CarrinhoComponent,
    PedidoComponent,
    FormComponent,
    ItensPedidoComponent,
    FechamentoComponent,
    InputComponent,
    FormasPagamentoComponent,
    ResumoPedidoComponent,
    LoginComponent,
    AdicionarComponent,
    EditarLojaComponent,
    CadastrarItensComponent,
    CadastroUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ResponsiveService, SideMenuComponent],
  entryComponents: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
