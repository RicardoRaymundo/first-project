import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {
  public nome: string = 'Rik';
  public idade: number = 28;
  public isDisabled: boolean = false;

  public position: { x: number, y: number } = { x: 0, y: 0 }

  public alertInfo(valor: MouseEvent): void {
    console.log(valor);
  }

  public mouseMovetest(valor: MouseEvent): void {
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}
