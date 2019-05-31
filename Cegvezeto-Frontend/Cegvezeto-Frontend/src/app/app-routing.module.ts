import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CegvezetoComponent } from './cegvezeto/cegvezeto.component';
import { MainComponent } from './main/main.component';
import { AccountingComponent } from './accounting/accounting.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { ProductionComponent } from './production/production.component';
import { SellComponent } from './sell/sell.component';
import { WorkerComponent } from './worker/worker.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {path: '', component: StartComponent},
  {path: 'main', component: MainComponent},
  {path: 'accounting', component: AccountingComponent},
  {path: 'advertisement', component: AdvertisementComponent},
  {path: 'ingredients', component: CegvezetoComponent},
  {path: 'production', component: ProductionComponent},
  {path: 'sell', component: SellComponent},
  {path: 'worker', component: WorkerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
