import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../game.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(private router: Router, private gameService: GameService) { }

  factoryName: any;



  start() {
    this.router.navigate(['main']);
    //this.gameService.saveFactoryName(this.factoryName).subscribe
  }

  ngOnInit() {
  
  }

}
