import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CegvezetoComponent } from './cegvezeto/cegvezeto.component';

const routes: Routes = [
  {path: '', component: CegvezetoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
