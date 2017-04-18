import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {Recipe} from './recipe';
import {Recipeservice} from '../recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
recipes : Recipe[];
@Output() inRecipeList = new EventEmitter<Recipe>();
  constructor(private recipeservice  : Recipeservice,private router : Router,private route : ActivatedRoute) { }

  ngOnInit() {
  this.recipes = this.recipeservice.getRecipes();
  }

onSelectedEvent(recipe : Recipe){
this.inRecipeList.emit(recipe);
}

addRecipe(){
this.router.navigate(['new'],{relativeTo : this.route});
}

}
