import { Component, OnInit } from '@angular/core';
import {Actor} from '../model/Actor';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {
  listActors =
    [
      {lastName: 'Robert', firstName: 'Julia'},
      {lastName: 'Walker', firstName: 'Paul'},
      {lastName: 'Pitt', firstName: 'Brad'}
    ];

  listFav:Actor[]=[];

  constructor() {
  }

  ngOnInit() {
  }

  delete(A:Actor)
  {
     let index = this.listActors.indexOf(A);
     this.listActors.splice(index,1);
  }
  addFavorite(A: Actor)
  {
    if (this.listFav.indexOf(A) < 0)
    //let index = this.listActors.indexOf(A);
    {this.listFav.push(A);
    console.log(this.listFav);}
  }
}
