import { Component, OnInit } from '@angular/core';
import { Article } from './article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
titre = "Les articles du jour";
listeArticles: Article[];
  constructor() { 
    this.listeArticles =
    [
      {titre:'Le championnat du monde',contenu:'Le champion du monde de cetteannée est ....',auteur:'Med Taher',date:'12/12/2005'},
      {titre:'Les nouveaux parents',contenu:'Les nouveaux parents....',auteur:'Ahmed Said',date:'11/11/2018'},
      {titre:'Comment écrire votre CV',contenu:'Pour réussir à décraucher un emploi ...',auteur:'Marie Elsa',date:'02/04/2017'}
      ];
  }

  ngOnInit() {
  }

}
