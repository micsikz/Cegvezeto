import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductionService } from '../production.service';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.css']
})
export class ProductionComponent implements OnInit {

  constructor(private productionService: ProductionService) { }

  @Output()
  sendProductionIntArray = new EventEmitter<number[]>();

  visible: false;
  javaCar: number;
  htmlProduction: number;

  addCar(car: number[]) {
    this.javaCar = car[7]

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
      }
    );
  }


  ngOnInit() {
  }

}
