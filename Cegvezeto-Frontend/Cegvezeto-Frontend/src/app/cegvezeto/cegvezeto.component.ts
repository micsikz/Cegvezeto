import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-cegvezeto',
  templateUrl: './cegvezeto.component.html',
  styleUrls: ['./cegvezeto.component.css']
})
export class CegvezetoComponent implements OnInit {

  constructor(private gameService: GameService) { }

  javaWheel: number;
  htmlWheel: number;

  javaChasis: number;
  htmlChasis: number;

  javaEngin: number;
  htmlEngin: number;

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
      }
    );
  }

  buyChasis() {
    this.gameService.buyChasis(this.htmlChasis).subscribe(
      (chasis: any) => {
        console.log(chasis);
        this.javaChasis = chasis;
      }
    );
  }

  buyEngin() {
    this.gameService.buyEngin(this.htmlEngin).subscribe(
      (engin: any) => {
        console.log(engin);
        this.javaEngin = engin;
      }
    );
  }


  ngOnInit() {
    this.gameService.getWheel().subscribe(
      (wheel: number) => {
        this.javaWheel = wheel;
        (console.log(this.javaWheel));
      }
    );

    this.gameService.getChasis().subscribe(
      (chasis: number) => {
        this.javaChasis = chasis;
        console.log(this.javaChasis);
      }
    );

    this.gameService.getEngin().subscribe(
      (engin: number) => {
        this.javaEngin = engin;
        console.log(this.javaEngin);
      }
    );

  }

}
