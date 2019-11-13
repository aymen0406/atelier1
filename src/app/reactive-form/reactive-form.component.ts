import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
    cin: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)])
  });

  constructor() { }

  ngOnInit() {
  }
  get name() {
    return this.userForm.get('name');
  }

  get email() {
    return this.userForm.get('email');
  }
get cin() {
    return this.userForm.get('cin');
}
}
