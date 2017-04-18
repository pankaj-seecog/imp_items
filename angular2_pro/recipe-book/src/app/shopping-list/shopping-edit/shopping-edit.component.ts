import { Component, OnInit} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
ingredient : Ingredient;
private name : string = 'Mango';
private am : number  = 0;


  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit() {
  }

  addIngredient(form : NgForm){
    const value = form.value;
    this.ingredient = new Ingredient(value.name,value.amount)
    this.shoppingListService.addIngredient(this.ingredient);
  }

}
