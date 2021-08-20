import { Component, OnInit, Input } from '@angular/core';
import { Cocktail } from 'src/app/shared/interface/cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})
export class CocktailListComponent implements OnInit {
  @Input() public cocktails: Cocktail[] | null = null;

  constructor() {}

  ngOnInit(): void {}
}
