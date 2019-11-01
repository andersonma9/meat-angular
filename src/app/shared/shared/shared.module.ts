import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomCurrencyPipe } from '../../customPipes/custom-currency.pipe';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [
    CustomCurrencyPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [
    CustomCurrencyPipe,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
  ]
})
export class SharedModule { }
