import { Component } from '@angular/core';
import {Recipeservice} from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  providers : [Recipeservice]
})
export class RecipesComponent {

 selectedRecipedone(){
alert("welcome to the base root")

 }
}
