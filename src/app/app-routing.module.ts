import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MaxComponent } from './components/max/max.component';

const routes: Routes = [
  { path:'' ,component:HomeComponent },
  { path:'max',component:MaxComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
