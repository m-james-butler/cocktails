import { Routes } from '@angular/router';
import { CartContainerComponent } from './cart-container/cart-container.component';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'cocktails', pathMatch: 'full' },
  { path: 'cocktails', component: CocktailContainerComponent },
  { path: 'cart', component: CartContainerComponent },
];
