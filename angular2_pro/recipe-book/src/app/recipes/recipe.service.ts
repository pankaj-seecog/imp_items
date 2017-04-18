import {Recipe} from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
@Injectable()
export class Recipeservice
{
private recipes : Recipe[] = [
new Recipe('Paneer Kofta','Awesome recipe..','https://upload.wikimedia.org/wikipedia/commons/0/03/Aloo-ghobhi-sabji.jpg',[new Ingredient('Paneer',1),
new Ingredient('Basan',2),
new Ingredient('haldi',1),
new Ingredient('Butter',1)
]),
new Recipe('Alu jeera','Good recipe','https://upload.wikimedia.org/wikipedia/commons/e/ea/Jeera-aloo-foodpanda.jpg',[])

];

constructor(private shoppingListService: ShoppingListService){


}

getRecipes(){

return this.recipes;

}

getRecipe(id:number){
return this.recipes[id];
}

addIngredientsToShoppingList(ingredients : Ingredient[]){
for(let x of ingredients){
this.shoppingListService.addIngredient(x);
}
}
}