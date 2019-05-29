import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountingService {

  constructor(private httpClient: HttpClient) { }

  public baseUrl: string = '//localhost:8080';

  public everyData() {
    return this.httpClient.get(this.baseUrl + '/logic/logic');
  }
}
