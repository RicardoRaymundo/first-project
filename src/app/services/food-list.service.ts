import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Interface
import { FoodList } from '../module/food-list';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  private url: string = 'http://localhost:3000/'; // food-list
  public eventEmitter: EventEmitter<FoodList> = new EventEmitter();

  private foodList: string[] = [
    'hamburguer',
    'pizza',
    'batata',
    'chocolate',
  ];

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }


  public getFood(): Observable<FoodList[]> {
    // return this.foodList;
    return this.httpClient.get<FoodList[]>(`${this.url}food-list`).pipe(
      res => res,
      error => error
    );

  }

  public postFood(food: string): Observable<FoodList> {
    // this.newFoodAlert(food);
    // return this.foodList.push(food);

    return this.httpClient.post<FoodList>(`${this.url}food-list`, { name: food }, this.httpOptions).pipe(
      res => res,
      error => error
    );
  }

  public putFood(food: string, id: number): Observable<FoodList> {
    return this.httpClient.put<FoodList>(`${this.url}food-list/${id}`, { name: food }).pipe(
      res => res,
      error => error
    );
  }

  public deleteFood(id: number): Observable<FoodList> {
    return this.httpClient.delete<FoodList>(`${this.url}food-list/${id}`).pipe(
      res => res,
      error => error
    );
  }

  public newFoodAlert(food: FoodList) {
    this.eventEmitter.emit(food);
  }
}
