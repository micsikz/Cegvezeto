import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../worker.service';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {

  constructor(private workerService: WorkerService) { }

  javaWorker: number;
  htmlWorker: number;
  


  buyWorker() {
    this.workerService.buyWorker(this.htmlWorker).subscribe(
      (worker: number) => {
        console.log(worker);
        this.javaWorker = worker;
      }
    );
  }

  dismissWorker() {
    this.workerService.dismissWorker(this.htmlWorker).subscribe(
      (worker: any) => {
        console.log(worker);
        this.javaWorker = worker;
      }
    );
  }

  ngOnInit() {

    this.workerService.getWorker().subscribe(
      (workers: number) => {
        this.javaWorker = workers;
        console.log(this.javaWorker);
      }
    );
  }

}
