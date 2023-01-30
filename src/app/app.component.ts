import {
  Component, OnInit,
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <app-atribute-directives>
     Estes serão recebidos pelo ng-content 
      <h1>Child</h1>
      <h3>Child 2</h3>
      <hr><hr><hr><hr>
     Estes serão recebidos pelo ng-content 
    </app-atribute-directives> -->
<!-- 
    <app-input [counter]="counter"></app-input>
    <button (click)="add()">Add</button> 
    

    <ng-template [ngIf]='data'>
      <h1> {{data.name}} </h1>
      <h2> {{data.age}} </h2>
    </ng-template>
    <app-output (sendData)="setData($event)"></app-output>-->

    <app-food-add></app-food-add>
    <app-food-list></app-food-list>

    <router-outlet></router-outlet>
    `,
})
export class AppComponent implements OnInit {

  public doDestroy: boolean = true;
  public counter: number = 0;

  public data: {name: string, age: number} | undefined; 

  public destroy(): void {
    this.doDestroy = !this.doDestroy;
  }

  public add() {
    this.counter++;
  }

  setData(event: {name: string, age: number}) {
    this.data = event;
  }

  ngOnInit(): void { }

}

/*
LIFE CYCLES

OnInit, 
DoCheck, 
AfterContentInit, 
AfterContentChecked, 
AfterViewInit, 
AfterViewChecked
OnDestroy
*/