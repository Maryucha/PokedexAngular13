import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/**
 * This class represents the shared module.
 * Here i'm import all outhers modules necessary for my aplication.
 */
@NgModule({
  declarations: [
    ErrorComponent,
    HeaderComponent,
    SearchComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ErrorComponent,
    HeaderComponent,
    SearchComponent,
    ListComponent,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
