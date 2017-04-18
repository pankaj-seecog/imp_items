//import { Component, OnInit,Input } from '@angular/core';
import {Params,Router,ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Ingredient } from '../../shared/ingredient.model';
import { Recipe } from '../recipe.model';
import {Recipeservice} from '../recipe.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
ingredients : Ingredient[];
id : number;
recipe : Recipe ;
//@Input() recipe : Recipe ;
  constructor(private recipeservice : Recipeservice,private router : Router,private route : ActivatedRoute) { }

  ngOnInit() {
  this.route.params.subscribe((params : Params)=>{
  this.id = +params['id'];
  this.recipe=this.recipeservice.getRecipe(this.id);
  })
  }
  
  addIngredientsToShoppingList(ingredients : Ingredient[]){
  
  this.recipeservice.addIngredientsToShoppingList(ingredients);
  
  }
  
  editRecipe(){
  this.router.navigate(['../',this.id,'edit'],{relativeTo : this.route});
  
  }

}
