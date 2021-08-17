import { Ingredient } from './ingredients.interface';

export interface Cocktail {
  name: string;
  img: string;
  description: string;
  ingredients?: Ingredient[];
}
