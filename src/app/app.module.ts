import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplicationMenusComponent } from './application-menus/application-menus.component';
import { SideMenuComponent } from './application-menus/side-menu/side-menu.component';
import { MaterialModule } from './material/material.module';
import { ResponsiveService } from './responsive.service';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { DetalhesComponent } from './restaurantes/detalhes/detalhes.component';
import { MenuComponent } from './restaurantes/detalhes/menu/menu.component';
import { AvaliacoesComponent } from './restaurantes/detalhes/avaliacoes/avaliacoes.component';



@NgModule({
  declarations: [
    AppComponent,
    ApplicationMenusComponent,
    SideMenuComponent,
    RestaurantesComponent,
    HomeComponent,
    SobreComponent,
    DetalhesComponent,
    MenuComponent,
    AvaliacoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [ResponsiveService, SideMenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
