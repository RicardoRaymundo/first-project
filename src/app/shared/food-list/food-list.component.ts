import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';

import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public foodList: FoodList[] = [];

  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
    this.foodListService.getFood().subscribe({
      next: (res: FoodList[]) => this.foodList = res,
      error: (err: any) => console.log(err),
    });

    this.foodListService.eventEmitter.subscribe({
      next: (res: FoodList) => {
        alert(`Nova comida: ${res.name}`);
        return this.foodList.push(res);
      },
      error: (err: any) => console.log(err),
    });
  }

  public deleteFood(id: number) {
    this.foodListService.deleteFood(id).subscribe({
      next: (res) => {
        return this.foodList = this.foodList.filter(item => {
          return id !== item.id;
        });
      }
    });
  }

  public editFood(name: string, id: number) {
    this.foodListService.putFood(name, id).subscribe({
      next: (res) => {
        return console.log(res);
      },
      error: (error) => console.log(error)
    });
  }
}
