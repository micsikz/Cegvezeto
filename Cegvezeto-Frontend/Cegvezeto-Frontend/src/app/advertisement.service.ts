import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {

  constructor(private httpClient: HttpClient) { }

  public baseUrl: string = '//localhost:8080';

  public getAdvertisement() {
    return this.httpClient.get(this.baseUrl + '/advertisement/get-advertisement');
  }

  public buyAdvertisement(htmlAdvertisement: number) {
    return this.httpClient.post(this.baseUrl + '/advertisement/buy-advertisement', + htmlAdvertisement);
  }

  public sellAdvertisement(htmlAdvertisement: number) {
    return this.httpClient.post(this.baseUrl + '/advertisement/sell-advertisement', + htmlAdvertisement);
  }
}
