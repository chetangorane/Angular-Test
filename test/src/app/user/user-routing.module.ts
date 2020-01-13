import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputComponent } from './input/input.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [
  {path:'Input', component: InputComponent},
  {path:'', component: InputComponent},
  {path :'Display', component: TableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
