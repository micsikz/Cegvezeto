import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private httpClient: HttpClient) { }

  public baseUrl: string = '//localhost:8080';

  public getWheel() {
    return this.httpClient.get(this.baseUrl + '/game/buy-wheel');
  }

  public buyWheel(htmlWheel: number) {
    return this.httpClient.post(this.baseUrl + '/game/buy-wheele', + htmlWheel);
  }

  public getChasis() {
    return this.httpClient.get(this.baseUrl + '/game/buy-chasis');
  }

  public getEngin() {
    return this.httpClient.get(this.baseUrl + '/game/buy-engin');
  }

  public getWorkers() {
    return this.httpClient.get(this.baseUrl + '/game/buy-workers');
  }

  public getAdvertisement() {
    return this.httpClient.get(this.baseUrl + '/game/buy-advertisement');
  }
}
