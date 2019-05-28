import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SellService {

  constructor(private httpClient:HttpClient) { }

  public baseUrl: string = '//localhost:8080';

  public sell(javaCar: number) {
    return this.httpClient.post(this.baseUrl + '/sell/sell', + javaCar);
  }
}
