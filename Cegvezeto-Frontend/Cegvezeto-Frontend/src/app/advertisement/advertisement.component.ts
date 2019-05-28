import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from '../advertisement.service';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})
export class AdvertisementComponent implements OnInit {

  constructor(private advertisementService: AdvertisementService) { }

  javaAdvertisement: number;
  htmlAdvertisement: number;

  buyAdvertisement() {
    this.advertisementService.buyAdvertisement(this.htmlAdvertisement).subscribe(
      (advertisement: any) => {
        console.log(advertisement);
        this.javaAdvertisement = advertisement;
      }
    );
  }

  sellAdvertisement() {
    this.advertisementService.sellAdvertisement(this.htmlAdvertisement).subscribe(
      (advertisement: any) => {
        console.log(advertisement);
        this.javaAdvertisement = advertisement;
      }
    );
  }

  ngOnInit() {
    this.advertisementService.getAdvertisement().subscribe(
      (advertisement: number) => {
        this.javaAdvertisement = advertisement;
        console.log(this.javaAdvertisement);
      }
    );
  }

}
