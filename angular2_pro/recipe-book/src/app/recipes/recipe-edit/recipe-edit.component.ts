import { Component, OnInit,Input } from '@angular/core';
import {Recipeservice} from '../recipe.service';
import {ActivatedRoute,Params} from '@angular/router';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
recipe : Recipe ;
editMode = false;
id : number;
  constructor(private route : ActivatedRoute,private recipeservice : Recipeservice) { }

  ngOnInit() {
   
  this.route.params.subscribe(
  (params : Params)=>{
  this.id = +params['id'];
  this.editMode=params['id'] !=null;
  console.log("id is "+this.editMode);
  //this.recipe=this.recipeservice.getRecipe(0);
  } 
  )
  }

}
