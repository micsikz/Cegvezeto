import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from '../advertisement.service';
import { AccountingService } from '../accounting.service';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})
export class AdvertisementComponent implements OnInit {

  constructor(private advertisementService: AdvertisementService, private accounting: AccountingService) { }

  javaAdvertisement: number;
  htmlAdvertisement: number = 0

  buyAdvertisement() {
    this.advertisementService.buyAdvertisement(this.htmlAdvertisement).subscribe(
      (advertisement: any) => {
        console.log(advertisement);
        this.javaAdvertisement = advertisement;
        this.htmlAdvertisement = 0;
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
    this.accounting.everyData().subscribe(
      (data: number[]) => {
        this.javaAdvertisement = data[12];
      }
    );
  }

}
