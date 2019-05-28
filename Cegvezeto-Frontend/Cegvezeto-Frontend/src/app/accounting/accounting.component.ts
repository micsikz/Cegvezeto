import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.css']
})
export class AccountingComponent implements OnInit {

  constructor() { }

  visible: false;
  monthAdvertisingCost: number;
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
  }

}
