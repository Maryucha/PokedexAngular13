import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './shared/error/error.component';

/**
 * This constant defines the routes this module
 */
const routes: Routes = [
  {
    path: '',
    loadChildren:  () => import('./views/views.module').then((m) => m.ViewsModule)
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
/**
 * This class resepents a routing app module and mapping then routes.
 */
export class AppRoutingModule { }
