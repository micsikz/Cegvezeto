import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-cegvezeto',
  templateUrl: './cegvezeto.component.html',
  styleUrls: ['./cegvezeto.component.css']
})
export class CegvezetoComponent implements OnInit {

  constructor(private gameService: GameService) { }

  wheel: number;
  alma: number = 5;
  htmlWheel: number;
  chasis: number;

  buyWheel() {
    this.gameService.buyWheel(this.htmlWheel).subscribe(
      (wheel: any) => {
        console.log(wheel);
      }
    );
  }

  ngOnInit() {
    this.gameService.getWheel().subscribe(
      (wheel: any) => {
        this.wheel = wheel;
        (console.log(this.wheel));
      }
    );

    this.gameService.getChasis().subscribe(
      (chasis: any) => {
        this.chasis = chasis;
        (console.log(this.chasis));
      }
    );

  }

}
