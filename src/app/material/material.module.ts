import { NgModule } from '@angular/core';



import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';


const MaterialImports = [
  MatToolbarModule,
  MatButtonModule,
  LayoutModule,
  MatSidenavModule,
  MatIconModule,
  MatDividerModule,
  MatListModule,
  MatExpansionModule,
  MatCardModule
];


@NgModule({
  imports: [
    MaterialImports
  ],
  exports: [
    MaterialImports
  ]
})
export class MaterialModule { }
