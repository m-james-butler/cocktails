import { Component, Input, OnInit } from '@angular/core';
import { Cocktail } from 'src/app/shared/interface/cocktail.interface';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss'],
})
export class CocktailDetailsComponent implements OnInit {
  @Input() cocktail: Cocktail = {
    name: '',
    img: '',
    description: '',
    ingredients: [],
  };

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  public addToCart(): void {
    this.cartService.addToCart(this.cocktail.ingredients);
  }
}
