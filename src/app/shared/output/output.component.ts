import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {
  @Output() public sendData = new EventEmitter();

  public list: Array<{name: string, age: number}> = [
    {name: 'Rik', age: 28},
    {name: 'Deb', age: 27},
    {name: 'Belo', age: 13}
  ];

  public getData(index: number) {
    this.sendData.emit(this.list[index]);
  }
} 
