import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-detali',
  templateUrl: './recipe-detali.component.html',
  styleUrls: ['./recipe-detali.component.css']
})
export class RecipeDetaliComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
