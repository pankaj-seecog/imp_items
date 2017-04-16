import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@Output() addingIn = new EventEmitter<Ingredient>();
ingredient : Ingredient;
private name : string = 'Mango';
private am : number  = 0;


  constructor() { }

  ngOnInit() {
  }

  addIngredient(){
    console.log('Name is '+this.name);
    console.log('Amount is '+this.am);
    this.ingredient = new Ingredient(this.name,this.am)
    this.addingIn.emit(this.ingredient);
  }

}
