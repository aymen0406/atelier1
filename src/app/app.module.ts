import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AreaComponent } from './area/area.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ArticlesComponent } from './articles/articles.component';
import { FilmsComponent } from './films/films.component';
import { ConvertisseurParentComponent } from './convertisseur-parent/convertisseur-parent.component';
import { ActorsComponent } from './actors/actors.component';
import { ActorComponent } from './actor/actor.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
const appRoutes: Routes = [
  {path: '', component: AreaComponent},
  {path: 'user', component: UserComponent},
  {path: 'article', component: ArticlesComponent},
  {path: 'film', component: FilmsComponent},
  {path: 'actors', component: ActorsComponent},
  {path: 'reactive', component: ReactiveFormComponent},
  {path: 'tempdriv', component: TemplateDrivenFormComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    AreaComponent,
    UserComponent,
    ArticlesComponent,
    FilmsComponent,
    ConvertisseurParentComponent,
    ActorsComponent,
    ActorComponent,
    ReactiveFormComponent,
    TemplateDrivenFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: AreaComponent},
      {path: 'user', component: UserComponent},
      {path: 'article', component: ArticlesComponent},
      {path: 'film', component: FilmsComponent},
      {path: 'actors', component: ActorsComponent},
      {path: 'reactive', component: ReactiveFormComponent},
      {path: 'tempdriv', component: TemplateDrivenFormComponent}
    ]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
