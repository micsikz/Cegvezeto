import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router) { }



  today = new Date();

 /* @Input()
  factoryName: string;
*/
  factoryName: string = "Factory";

  plusMonth() {
   this.today = new Date(this.today.getFullYear(), this.today.getMonth() + 1, this.today.getDate());
  }

  goToAccounting() {
    this.router.navigate(['accounting']);
  }

  goToAdvertisement() {
    this.router.navigate(['advertisement']);
  }

  goToIngredients() {
    this.router.navigate(['ingredients']);
  }

  goToProduction() {
    this.router.navigate(['production']);
  }

  goToSell() {
    this.router.navigate(['sell']);
  }

  goToWorker() {
    this.router.navigate(['worker']);
  }

  ngOnInit() {
  }

}