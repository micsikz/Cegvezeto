import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CegvezetoComponent } from './cegvezeto/cegvezeto.component';
import { WorkerComponent } from './worker/worker.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { ProductionComponent } from './production/production.component';
import { SellComponent } from './sell/sell.component';
import { AccountingComponent } from './accounting/accounting.component';
import { MainComponent } from './main/main.component';
import { StartComponent } from './start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    CegvezetoComponent,
    WorkerComponent,
    AdvertisementComponent,
    ProductionComponent,
    SellComponent,
    AccountingComponent,
    MainComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
