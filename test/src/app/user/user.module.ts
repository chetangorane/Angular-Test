import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { InputComponent } from './input/input.component';
import { TableComponent } from './table/table.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [UserComponent, InputComponent, TableComponent],
  imports: [
    CommonModule,
    UserRoutingModule, ReactiveFormsModule
  ]
})
export class UserModule { }
