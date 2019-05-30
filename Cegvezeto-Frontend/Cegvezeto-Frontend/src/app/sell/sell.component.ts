import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SellService } from '../sell.service';
import { AccountingService } from '../accounting.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  constructor(private sellService: SellService, private accounting: AccountingService) { }


  @Output()
  sendSellIntArray = new EventEmitter<number[]>();

  @Output()
  plusDate = new EventEmitter();

  htmlSellingPrise: number = 0;
  visible: boolean = false;
  javaCar: number = 0;
  maxSellingPrice: number = 0;

  sell() {
    this.sellService.sell(this.htmlSellingPrise).subscribe(
      (car: number[]) => {
        this.javaCar = car[11];
        this.plusDate.next()
        this.sendSellIntArray.next(car);
      }
    );
  }

  ngOnInit() {

    this.accounting.everyData().subscribe(
      (data: number[]) => {
        this.javaCar = data[11];
        this.maxSellingPrice = data[13];
      }
    );
  }

}
