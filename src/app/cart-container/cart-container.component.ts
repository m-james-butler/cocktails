import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/interface/ingredients.interface';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-cart-container',
  templateUrl: './cart-container.component.html',
  styleUrls: ['./cart-container.component.scss'],
})
export class CartContainerComponent implements OnInit {
  public ingredients: Ingredient[];
  public subscription: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.subscription = this.cartService.ingredients$.subscribe(
      (ingredients: Ingredient[]) => (this.ingredients = ingredients)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
