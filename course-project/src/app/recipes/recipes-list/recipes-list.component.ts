import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipes[] = [
    new Recipes('test-recipe','this is recipe description','https://hips.hearstapps.com/delish/assets/17/39/1506456246-delish-healthy-chicken-casserole-1.jpg'),
    new Recipes('Second-test-recipe','this is second-recipe description','https://hips.hearstapps.com/delish/assets/17/39/1506456246-delish-healthy-chicken-casserole-1.jpg')
  ];

  @Output()recipeWasSetected = new EventEmitter<Recipes>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelcted(recipe: Recipes) {
    this.recipeWasSetected.emit(recipe);
  }

}
