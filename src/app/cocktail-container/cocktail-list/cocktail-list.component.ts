import { EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output } from '@angular/core';
import { Cocktail } from 'src/app/shared/interface/cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})
export class CocktailListComponent implements OnInit {
  @Input() cocktails: Cocktail[] = [];
  @Input() public selectedCocktail: Cocktail = {
    name: '',
    img: '',
    description: '',
    ingredients: [],
  };
  @Output() private changeCocktail: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public selectCocktail(index: number): void {
    this.changeCocktail.emit(index);
  }
}
