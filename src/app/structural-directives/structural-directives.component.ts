import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {
  public isShown: boolean = false;
  public toggleButton: boolean = false;
  public iterationList: Array<{ nome: string, idade: number }> = [
    { nome: 'Ricardo', idade: 28 },
    { nome: 'Deborah', idade: 27 },
    { nome: 'Belo', idade: 13 },
  ]

  public switchName: string = 'Deborah'

  ngOnInit(): void {
    setInterval(() => {
      this.isShown = !this.isShown;
    }, 2000)
  }

  onClick(): void {
    this.toggleButton = !this.toggleButton;
  }

  public pushToList() {
    this.iterationList.push({ nome: 'Rodrigo', idade: 25 });
  }
  public onItemClick(event: MouseEvent, index: number) {
    console.log(event, 'AT INDEX ==>', index);
  }
} 
