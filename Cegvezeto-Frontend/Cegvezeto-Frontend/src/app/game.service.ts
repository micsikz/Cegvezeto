import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private httpClient: HttpClient) { }

  public baseUrl: string = '//localhost:8080';

  public buyChasis(htmlChasis: number) {
    return this.httpClient.post(this.baseUrl + '/ingredient/buy-chasise', + htmlChasis);
  }

  public buyWheel(htmlWheel: number) {
    return this.httpClient.post(this.baseUrl + '/ingredient/buy-wheele', + htmlWheel);
  }

  public buyEngin(htmlEngin: number) {
    return this.httpClient.post(this.baseUrl + '/ingredient/buy-engine', + htmlEngin);
  }

  public getWheel() {
    return this.httpClient.get(this.baseUrl + '/ingredient/buy-wheel');
  }

  public getChasis() {
    return this.httpClient.get(this.baseUrl + '/ingredient/buy-chasis');
  }

  public getEngin() {
    return this.httpClient.get(this.baseUrl + '/ingredient/buy-engin');
  }


}
