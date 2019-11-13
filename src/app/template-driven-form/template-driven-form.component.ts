import { Component, OnInit } from '@angular/core';
import {User} from '../model/User';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  user: User = new User('', '', '');
  constructor() { }
submitted=false;
  ngOnInit() {
  }
  getInformations(f: NgForm, g) {
    console.log(f);
    console.log(g);
  }
  onsubmit()
  {
    this.submitted=true;
    console.log(this.submitted);
  }

}
