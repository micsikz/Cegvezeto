import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductionService } from '../production.service';
import { AccountingService } from '../accounting.service';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.css']
})
export class ProductionComponent implements OnInit {

  constructor(private productionService: ProductionService, private accounting: AccountingService) { }

  @Output()
  sendProductionIntArray = new EventEmitter<number[]>();

  visible: false;
  javaCar: number;
  htmlProduction: number = 0;

  addCar(car: number[]) {
    this.javaCar = car[7];

  }

  production() {
    this.productionService.production(this.htmlProduction).subscribe(
      (production: number[]) => {
        console.log(production[0]);
        console.log(production[1]);
        console.log(production[2]);
        console.log(production[3]);
        this.javaCar = production[3];
        this.sendProductionIntArray.next(production);
        this.htmlProduction = 0;
      }
    );
  }


  ngOnInit() {

    this.accounting.everyData().subscribe(
      (data: number[]) => {
        this.javaCar = data[11];
      }
    );
  }

}
