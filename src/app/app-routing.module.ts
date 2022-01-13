import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';


const routes: Routes = [
  { path: 'favorites', component: FavoritePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: '', component: HomePageComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
