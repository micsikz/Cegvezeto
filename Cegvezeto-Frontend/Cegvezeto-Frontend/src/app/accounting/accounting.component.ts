import { Component, OnInit } from '@angular/core';
import { AccountingService } from '../accounting.service';

@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.css']
})
export class AccountingComponent implements OnInit {

  constructor(private accounting: AccountingService) { }

  visible: false;
  monthAdvertisingCost: number = 0;
  monthWorkersWages: number;
  randomPlusReklam: number;
  realSelling: number;
  monthIncome: number;
  companyMoney: number;

  addAcounting(values: number[]) {
    this.monthAdvertisingCost = values[1];
    this.monthWorkersWages = values[2];
    this.randomPlusReklam = values[3];
    this.realSelling = values[4];
    this.monthIncome = values[5];
    this.companyMoney = values[6];
  }

  ngOnInit() {
    this.accounting.everyData().subscribe(
      (data: number[]) => {
        this.monthAdvertisingCost = data[0];
        this.monthWorkersWages = data[2];
        this.randomPlusReklam = data[3];
        this.realSelling = data[4];
        this.monthIncome = data[5];
        this.companyMoney = data[6];
        console.log(this.monthAdvertisingCost);
      }
    );

  }

}
