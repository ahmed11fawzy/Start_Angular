import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  imgsPath:string[]=[
    "./assets/Images/cabin.png",
    "./assets/Images/cake.png",
    "./assets/Images/circus.png",
    "./assets/Images/game.png",
    "./assets/Images/safe.png",
    "./assets/Images/submarine.png",
  ];
  viewDetails(x:string){

  }

}
