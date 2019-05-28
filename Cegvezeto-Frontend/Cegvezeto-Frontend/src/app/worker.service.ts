import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  constructor(private httpClient: HttpClient) { }

  public baseUrl: string = '//localhost:8080';

  public buyWorker(htmlWorker: number) {
    return this.httpClient.post(this.baseUrl + '/worker/buy-workere', + htmlWorker);
  }

  public getWorker() {
    return this.httpClient.get(this.baseUrl + '/worker/buy-worker');
  }

  public dismissWorker(htmlWorker: number) {
    return this.httpClient.post(this.baseUrl + '/worker/dismiss-worker', + htmlWorker);
  }
}
