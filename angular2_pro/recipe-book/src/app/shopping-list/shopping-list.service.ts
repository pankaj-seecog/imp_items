import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService{
ingredientTotal = new EventEmitter<Ingredient[]>();
private ingredients : Ingredient[]=[{name:'A',amount : 1}];

getIngredients(){

return this.ingredients;

}

addIngredient(ingredient : Ingredient){
this.ingredients.push(ingredient);
this.ingredientTotal.emit(this.ingredients);
}
}