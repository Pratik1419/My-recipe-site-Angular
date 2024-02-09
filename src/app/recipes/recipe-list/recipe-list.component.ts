import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipes.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('New food','This is a vegtable items', 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:eco,dpr_2.0/newscms/2021_32/1759501/zucchini-kb-main-210810.jpg')
    ,new Recipe('Raman Recipe','This is the ramen area', 'https://images.deliveryhero.io/image/foodpanda/recipes/ramen-egg-recipe-1.jpg')
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
