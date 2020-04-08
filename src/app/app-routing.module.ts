import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuFormComponent } from './menu-form/menu-form.component';
import { Page404Component } from './page404/page404.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
{
  path:'',
  pathMatch: 'full',
  redirectTo: '/home'
},
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'edit',
  component: MenuFormComponent
},{
  path: 'list',
  component: ListComponent
},
  {
  path: '**',
  component: Page404Component
}







  //end route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
