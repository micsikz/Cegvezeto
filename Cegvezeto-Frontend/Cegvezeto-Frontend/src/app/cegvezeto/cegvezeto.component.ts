import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-cegvezeto',
  templateUrl: './cegvezeto.component.html',
  styleUrls: ['./cegvezeto.component.css']
})
export class CegvezetoComponent implements OnInit {

  constructor(private gameService: GameService) { }

  javaWheel: any;
  htmlWheel: number;

  javaChasis: number;
  htmlChasis: number;

  javaEngin: number;
  htmlEngin: number;

  javaWorkers: number;
  htmlWorkers: number;

  javaAdvertisement: number;
  htmlAdvertisement: number;


  buyWheel() {
    this.gameService.buyWheel(this.htmlWheel).subscribe(
      (wheel: any) => {
        console.log(wheel);
        this.javaWheel = wheel;
      }
    );
  }

  /*ngOnChanges(changes: any) {
    changes.javaWheel;
  }*/

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

    this.gameService.getWorkers().subscribe(
      (workers: number) => {
        this.javaWorkers = workers;
        console.log(this.javaWorkers);
      }
    );

    this.gameService.getAdvertisement().subscribe(
      (advertisement: number) => {
        this.javaAdvertisement = advertisement;
        console.log(this.javaAdvertisement);
      }
    );
  }

  

}
