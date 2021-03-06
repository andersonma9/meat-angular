import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ApplicationMenusComponent } from "./application-menus/application-menus.component";
import { SideMenuComponent } from "./application-menus/side-menu/side-menu.component";
import { ResponsiveService } from "./responsive.service";
import { LojasComponent } from "./lojas/lojas.component";
import { HomeComponent } from "./home/home.component";
import { DetalhesComponent } from "./lojas/detalhes/detalhes.component";

import { AvaliacoesComponent } from "./lojas/detalhes/avaliacoes/avaliacoes.component";

import { MenuComponent } from "./lojas/detalhes/itens/lista.component";
import { ItensComponent } from "./lojas/detalhes/itens/itens/itens.component";
import { CarrinhoComponent } from "./lojas/detalhes/itens/carrinho/carrinho.component";
import { InputComponent } from "./shared/input/input.component";
import { LoginComponent } from "./application-menus/login/login.component";
import { AdicionarComponent } from "./lojas/adicionar/adicionar.component";
import { EditarLojaComponent } from "./lojas/detalhes/editar-loja/editar-loja.component";
import { CadastrarItensComponent } from "./lojas/detalhes/cadastrar-itens/cadastrar-itens.component";
import { CadastroUsuarioComponent } from "./application-menus/cadastro-usuario/cadastro-usuario.component";

import { GlobalErrorHandler } from "./error-handler";
import { EditarPerfilComponent } from "./application-menus/editar-perfil/editar-perfil.component";
import { NotificationComponent } from "./shared/notification/notification.component";
import { SharedModule } from "./shared/shared/shared.module";
import { EditarItemComponent } from './lojas/detalhes/editar-item/editar-item.component';
import { ItemInfoComponent } from './lojas/detalhes/editar-item/item-info/item-info.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { CardLoadingComponent } from './shared/card-loading/card-loading.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationMenusComponent,
    SideMenuComponent,
    LojasComponent,
    HomeComponent,
    DetalhesComponent,
    MenuComponent,
    AvaliacoesComponent,
    ItensComponent,
    CarrinhoComponent,
    InputComponent,
    LoginComponent,
    AdicionarComponent,
    EditarLojaComponent,
    CadastrarItensComponent,
    CadastroUsuarioComponent,
    EditarPerfilComponent,
    NotificationComponent,
    EditarItemComponent,
    ItemInfoComponent,
    LoadingComponent,
    CardLoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // ReactiveFormsModule,
    // FormsModule,
    HttpClientModule,
    // ServicesModule,
    // PedidoModule,
    SharedModule
  ],
  providers: [
    ResponsiveService,
    SideMenuComponent,
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }
  ],
  entryComponents: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
