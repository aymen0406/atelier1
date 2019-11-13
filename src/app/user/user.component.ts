import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
 
  name: string;
  email: string;
  address: string;
  hobbies: string[];
  show: boolean;
  text: string;
  
  constructor() {
    this.name = "toto";
    this.email = "toto@esprit.tn";
    this.address = "rue d'usine Chotrana Ariana";
    this.hobbies = ["Music", "Movies", "Sports"];
    this.show = false;
    this.text = "show hobbies";
  
  }

  ngOnInit() {}
  getHobbies() {
    if (this.show == false) {
      this.show = true;
      this.text = "cacherHobbies";
    } else {
      this.show = false;
      this.text = "show hobbies";
    }
  }
  deleteHobbies(index)
  {
    this.hobbies.splice(index,1);
    console.log(this.hobbies);
  }
}
