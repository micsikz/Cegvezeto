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

  javaWorkers: number;
  htmlWorkers: number;

  javaAdvertisement: number;
  htmlAdvertisement: number;


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
        this.javaWheel = wheel;
        (console.log(this.javaWheel));
      }
    );

    this.gameService.getChasis().subscribe(
      (chasis: any) => {
        this.javaChasis = chasis;
        console.log(this.javaChasis);
      }
    );

    this.gameService.getEngin().subscribe(
      (engin: any) => {
        this.javaEngin = engin;
        console.log(this.javaEngin);
      }
    );

    this.gameService.getWorkers().subscribe(
      (workers: any) => {
        this.javaWorkers = workers;
        console.log(this.javaWorkers);
      }
    );

    this.gameService.getAdvertisement().subscribe(
      (advertisement: any) => {
        this.javaAdvertisement = advertisement;
        console.log(this.javaAdvertisement);
      }
    );
  }

  

}
