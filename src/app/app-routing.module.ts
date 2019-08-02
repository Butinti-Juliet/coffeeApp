import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'coffee', loadChildren: './page/coffee/coffee.module#CoffeePageModule' },
  { path: 'coffee1', loadChildren: './page/coffee1/coffee1.module#Coffee1PageModule' },
  { path: 'coffee2', loadChildren: './page/coffee2/coffee2.module#Coffee2PageModule' },
  { path: 'coffee3', loadChildren: './page/coffee3/coffee3.module#Coffee3PageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
