import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { AccountingService } from '../accounting.service';

@Component({
  selector: 'app-cegvezeto',
  templateUrl: './cegvezeto.component.html',
  styleUrls: ['./cegvezeto.component.css']
})
export class CegvezetoComponent implements OnInit {

  constructor(private gameService: GameService, private accounting:AccountingService) { }

  visible: boolean = false;

  javaWheel: number;
  htmlWheel: number = 0;

  javaChasis: number;
  htmlChasis: number = 0;

  javaEngin: number;
  htmlEngin: number = 0;

  add(value: number[]) {
    this.javaWheel = value[0];
    this.javaChasis = value[1];
    this.javaEngin = value[2];
  }

  buyWheel() {
    this.gameService.buyWheel(this.htmlWheel).subscribe(
      (wheel: any) => {
        console.log(wheel);
        this.javaWheel = wheel;
        this.htmlWheel = 0;
      }
    );
  }


  buyChasis() {
    this.gameService.buyChasis(this.htmlChasis).subscribe(
      (chasis: any) => {
        console.log(chasis);
        this.javaChasis = chasis;
        this.htmlChasis = 0;
      }
    );
  }

  buyEngin() {
    this.gameService.buyEngin(this.htmlEngin).subscribe(
      (engin: any) => {
        console.log(engin);
        this.javaEngin = engin;
        this.htmlEngin = 0;
      }
    );
  }


  ngOnInit() {

    this.accounting.everyData().subscribe(
      (data: number[]) => {
        this.javaWheel = data[8];
        this.javaChasis = data[9];
        this.javaEngin = data[10];
      }
    );

  }

}
