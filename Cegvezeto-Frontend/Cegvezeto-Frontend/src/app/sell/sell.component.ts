import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SellService } from '../sell.service';
import { LocaleDataIndex } from '@angular/common/src/i18n/locale_data';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  constructor(private sellService: SellService) { }


  @Output()
  sendSellIntArray = new EventEmitter<number[]>();

  htmlSellingPrise: number;
  visible: boolean = false;

  sell() {
    this.sellService.sell(this.htmlSellingPrise).subscribe(
      (car: number[]) => {
        console.log(car[0]);
        console.log(car[1]);
        console.log(car[2]);
        console.log(car[3]);
        console.log(car[4]);
        console.log(car[5]);
        console.log(car[6]);
        console.log(car[7]);

        this.sendSellIntArray.next(car);
      }
    );
  }

  ngOnInit() {
  }

}
