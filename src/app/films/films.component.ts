import { Component, OnInit } from "@angular/core";
import { Film } from './film';

@Component({
  selector: "app-films",
  templateUrl: "./films.component.html",
  styleUrls: ["./films.component.css"]
})
export class FilmsComponent implements OnInit {
  sum: number;
  isShow = true;
  filme: Film = new Film();
  nbAction: number;
  listFilms = [
    { nom: "MANDY", duree: 2, categorie: "action" },
    { nom: "LOVE-AFTER-LOVE", duree: 3, categorie: "drama" },
    { nom: "YOU-WERE-NEVER-REALLY-HERE", duree: 2, categorie: "drama" },
    { nom: "THE-RIDER", duree: 3, categorie: "drama" },
    { nom: "FIRST-REFORMED", duree: 6, categorie: "action" }
  ];
  style1 = {
    color: "red",
    "font-size": "24px"
  };
  style2 = {
    color: "blue"
  };
  onClick() {
    this.isShow = false;
    let nb = 0;
    for (let f of this.listFilms) {
      if (f.categorie == 'action')
      { 
      nb++;}
    }
    this.nbAction = nb;
    this.sum = this.listFilms.length;
  }
  addFilm()
  {
    this.listFilms.push(this.filme);
    this.filme = new Film();
    console.log(this.listFilms);
  }
  constructor() {}

  ngOnInit() {}
}
