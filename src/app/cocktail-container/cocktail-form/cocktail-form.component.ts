import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Cocktail } from 'src/app/shared/interface/cocktail.interface';
import { CocktailService } from 'src/app/shared/services/cocktail.service';
import { CocktailContainerComponent } from '../cocktail-container.component';

@Component({
  selector: 'app-cocktail-form',
  templateUrl: './cocktail-form.component.html',
  styleUrls: ['./cocktail-form.component.scss'],
})
export class CocktailFormComponent implements OnInit {
  public cocktail: Cocktail;
  public cocktailForm: FormGroup;
  quantities = [
    { id: 'oz', name: 'ounces' },
    { id: 'tsp', name: 'teasponns' },
    { id: 'tbsp', name: 'tablespoon' },
    { id: 'leaves', name: 'leaves' },
    { id: 'dash', name: 'dash' },
    { id: 'unit', name: 'other' },
  ];

  constructor(
    private fb: FormBuilder,
    private cocktailService: CocktailService,
    public router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const index = paramMap.get('index');
      if (index !== null) {
        this.cocktail = this.cocktailService.getCocktail(+index);
      }
      this.cocktailForm = this.initForm(this.cocktail);
    });
  }

  private initForm(
    cocktail: Cocktail = { name: '', description: '', img: '', ingredients: [] }
  ): FormGroup {
    return this.fb.group({
      name: [cocktail.name, Validators.required],
      img: [cocktail.img, Validators.required],
      description: [cocktail.description, Validators.required],
      ingredients: this.fb.array(
        cocktail.ingredients.map((ingredient) =>
          this.fb.group({
            name: [ingredient.name, Validators.required],
            quantity: [ingredient.quantity, Validators.required],
            unit: [ingredient.unit, Validators.required],
          })
        ),
        Validators.required
      ),
    });
  }

  public submit(): void {
    if (this.cocktail) {
      this.cocktailService.editCocktail(this.cocktailForm.value);
    } else {
      this.cocktailService.addCocktail(this.cocktailForm.value);
    }
    this.router.navigate(['..'], { relativeTo: this.activatedRoute });
  }

  public get ingredients() {
    return this.cocktailForm.get('ingredients') as FormArray;
  }

  public get units() {
    return this.quantities;
  }

  public addIngredient() {
    this.ingredients.push(
      this.fb.group({
        name: ['', Validators.required],
        quantity: [0, Validators.required],
        unit: ['', Validators.required],
      })
    );
  }
}
