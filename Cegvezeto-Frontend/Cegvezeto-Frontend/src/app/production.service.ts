import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductionService {

  constructor(private httpClient: HttpClient) { }

  public baseUrl: string = '//localhost:8080';

  public production(htmlProduction: number) {
    return this.httpClient.post(this.baseUrl + '/production/production', + htmlProduction);
  }
}
