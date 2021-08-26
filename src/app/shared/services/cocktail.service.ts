import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cocktail } from '../interface/cocktail.interface';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  public cocktails$: BehaviorSubject<Cocktail[]> = new BehaviorSubject([
    {
      name: 'Mojito',
      img: '../assets/mojito.jpg',
      description:
        'The Mojito complimenting summer perfectly with a fresh minty taste. The mixture of white rum, mint, lime juice, sugar and soda water is crisp and clean with a relatively low alcohol content, the soda water can be replaced with sprite or 7-up. When preparing a mojito always crush the mint leaves as opposed to dicing to unlock oils that will assist with enhancing the minty flavour.',
      ingredients: [
        {
          name: 'White Rum',
          quantity: 1.5,
          unit: 'oz',
        },
        {
          name: 'Lime Juice',
          quantity: 1,
          unit: 'oz',
        },
        {
          name: 'Sugar',
          quantity: 2,
          unit: 'tsp',
        },
        {
          name: 'Mint',
          quantity: 6,
          unit: 'leaves',
        },
        {
          name: 'Perrier',
          quantity: 1,
          unit: 'unit',
        },
      ],
    },
    {
      name: 'Lynchburg Lemonade',
      img: '../assets/lynchburg.jpg',
      description:
        'The sour yet refreshingly sweet taste of lemonade mixed with classic Jack Daniels is a tasty treat sure to satisfy your taste buds during the hot summer months. This sweet and sour staple is bound for the picnic cooler.',
      ingredients: [
        {
          name: "Jack Daniel's Tennessee Whiskey",
          quantity: 1.25,
          unit: 'oz',
        },
        {
          name: 'Sweet and Sour',
          quantity: 2,
          unit: 'oz',
        },
        {
          name: 'Triple Sec',
          quantity: 0.75,
          unit: 'oz',
        },
        {
          name: 'Lemonade or Sprite',
          quantity: 1,
          unit: 'unit',
        },
      ],
    },
    {
      name: 'Moscow Mule',
      img: '../assets/moscow.jpg',
      description:
        'A Moscow mule is a cocktail made with vodka, spicy ginger beer, and lime juice, garnished with a slice or wedge of lime. It is a type of buck, therefore sometimes called a vodka buck. The Moscow mule is popularly served in a copper mug, which takes on the cold temperature of the liquid.',
      ingredients: [
        {
          name: 'Vodka',
          quantity: 1.5,
          unit: 'oz',
        },
        {
          name: 'Ginger Beer',
          quantity: 4,
          unit: 'oz',
        },
        {
          name: 'Lime Juice',
          quantity: 0.25,
          unit: 'oz',
        },
      ],
    },
    {
      name: 'Cosmopolitan',
      img: '../assets/cosmo.jpg',
      description:
        'The tangy concoction of vodka, triple sec, lime juice and cranberry juice has managed to leapfrog the venerable screwdriver as many vodka drinkers prefer the Cosmopolitan’s cleaner and slightly tart taste. The keys to the preparation of a Cosmopolitan are a good brand of cranberry juice and Cointreau Triple Sec, two essential elements to the drink.',
      ingredients: [
        {
          name: 'Vodka Citron',
          quantity: 1.5,
          unit: 'oz',
        },
        {
          name: 'Cranberry Juice',
          quantity: 1,
          unit: 'oz',
        },
        {
          name: 'Cointreau',
          quantity: 0.5,
          unit: 'oz',
        },
        {
          name: 'Lime Juice',
          quantity: 0.5,
          unit: 'oz',
        },
      ],
    },
    {
      name: 'Mai Tai',
      img: '../assets/maitai.jpg',
      description:
        'The Mai Tai is a Polynesian-style cocktail that has a fruity tropical taste sweet and vibrant. The mixture of light and dark rum, orange curacao, orgeat syrup and lime juice has been a symbol of Tahitian culture ever since the drink was first created.',
      ingredients: [
        {
          name: 'White Rum',
          quantity: 1.5,
          unit: 'oz',
        },
        {
          name: 'Dark Rum',
          quantity: 0.75,
          unit: 'oz',
        },
        {
          name: 'Orange Curaçao',
          quantity: 0.5,
          unit: 'oz',
        },
        {
          name: 'Orgeat Syrup',
          quantity: 0.5,
          unit: 'oz',
        },
        {
          name: 'Lime Juice',
          quantity: 0.5,
          unit: 'oz',
        },
      ],
    },
  ]);

  public getCocktail(index: number) {
    return this.cocktails$.value[index];
  }

  public addCocktail(cocktail: Cocktail): void {
    const value = this.cocktails$.value;
    this.cocktails$.next([...value, cocktail]);
  }

  public editCocktail(editedCocktail: Cocktail): void {
    const value = this.cocktails$.value;
    this.cocktails$.next(
      value.map((cocktail: Cocktail) => {
        if (cocktail.name === editedCocktail.name) {
          return editedCocktail;
        } else {
          return cocktail;
        }
      })
    );
  }
  constructor() {}
}
