import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UpdateCurrencyComponent } from './update-currency/update-currency.component';
import { FileFormationComponent } from './file-formation/file-formation.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'update-currency', component: UpdateCurrencyComponent },
  { path: 'file-formation', component: FileFormationComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }