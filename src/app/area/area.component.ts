import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  res: number;
  name: string;
  email: string;
  address: string;
  hobbies: string[];

  constructor() { 
    
  }

  ngOnInit() {
  }
  calculerCercle(val) {
    this.res = val * val * 3.14;
  }
  calculerSquare(val) {
    this.res = val * val;
  }
}
