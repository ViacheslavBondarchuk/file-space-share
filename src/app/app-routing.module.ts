import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './component/index/index.component';
import {LoginComponent} from './component/login/login.component';


const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: '', component: IndexComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
