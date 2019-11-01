import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreComponent } from './sobre.component';
import { Routes, RouterModule } from '@angular/router';

const sobreRoutes: Routes = [
  {
    path: '',
    component: SobreComponent
  }
]

@NgModule({
  declarations: [SobreComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(sobreRoutes)
  ]
})
export class SobreModule { }
