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
    return this.httpClient.post(this.baseUrl + '/game/buy-wheel', + htmlWheel);
  }
   
  public getChasis() {
      return this.httpClient.get(this.baseUrl + '/game/buy-chasis');
    }
  
}
