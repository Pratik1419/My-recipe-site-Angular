import { Component, OnInit } from '@angular/core';

import { ingredients } from '../shared/ingredients.module';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: ingredients[] = [
    new ingredients('Rich', 2),
    new ingredients('Tomatoes', 5),
  ];
  constructor() {}

  ngOnInit() {}

  onIngredientAdded(ingredient: ingredients) {
    this.ingredients.push(ingredient);
  }
}
