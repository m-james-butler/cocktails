import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ingredient } from '../interface/ingredients.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public ingredients$: BehaviorSubject<Ingredient[]> = new BehaviorSubject(
    null
  );

  constructor() {}

  addToCart(ingredients: Ingredient[]): void {
    const currentValue = this.ingredients$.value;
    if (currentValue) {
      const obj = [...currentValue, ...ingredients].reduce((acc, value) => {
        if (acc[value.name]) {
          acc[value.name][0] += value.quantity;
        } else {
          acc[value.name] = [value.quantity, value.unit];
        }
        return acc;
      }, {});
      const result = Object.keys(obj).map((key) => ({
        name: key,
        quantity: obj[key][0],
        unit: obj[key][1],
      }));
      console.log(obj);
      console.log(result);
      this.ingredients$.next(result);
    } else {
      this.ingredients$.next(ingredients);
    }
  }
}
