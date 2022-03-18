import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [
    ErrorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorComponent
  ]
})
/**
 * This class represents the shared module.
 * Here i'm import all outhers modules necessary for my aplication.
 */
export class SharedModule { }
