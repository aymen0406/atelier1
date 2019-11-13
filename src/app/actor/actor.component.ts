import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Actor} from '../model/Actor';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
@Input() actor: Actor;
@Output() clicked = new EventEmitter<Actor>();
@Output() addchecked = new EventEmitter<any>();
checked: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  deleteActor(A: Actor) {
      this.clicked.emit(A);
  }
  AddtoFavorite(A: Actor)
  {
    this.addchecked.emit(A);
    this.checked = true;
  }
}
