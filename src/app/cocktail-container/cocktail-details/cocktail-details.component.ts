import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Cocktail } from 'src/app/shared/interface/cocktail.interface';

import { CocktailService } from 'src/app/shared/services/cocktail.service';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss'],
})
export class CocktailDetailsComponent implements OnInit {
  public cocktail: Cocktail;

  constructor(
    private cartService: CartService,
    private cocktailService: CocktailService,
    private activatedRoute: ActivatedRoute
  ) {
    this.cocktail = this.cocktailService.getCocktail(
      +this.activatedRoute.snapshot.paramMap.get('index')!
    );
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const cocktailIndex = paramMap.get('index');
      if (cocktailIndex) {
        this.cocktail = this.cocktailService.getCocktail(+cocktailIndex);
      }
    });
  }

  public addToCart(): void {
    this.cartService.addToCart(this.cocktail.ingredients);
  }
}
