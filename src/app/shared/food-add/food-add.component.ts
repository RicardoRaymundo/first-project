import { Component } from '@angular/core';

//Services
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent {
  constructor(private foodListService: FoodListService) { }

  addFood(food: string) {
    this.foodListService.postFood(food).subscribe({
      next: (res) => this.foodListService.newFoodAlert(res),
      error: (error) => error
    });
  }
}
