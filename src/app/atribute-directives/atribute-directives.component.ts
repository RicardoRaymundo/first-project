import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-atribute-directives',
  templateUrl: './atribute-directives.component.html',
  styleUrls: ['./atribute-directives.component.scss']
})
export class AtributeDirectivesComponent implements OnInit {
  public toggleClass: boolean = true;
  public width: string = '200px';
  public background: string = 'green';
  public name: string = '';
  public forList: Array<{ name: string }> = [];
  public date: Date = new Date();

  public save(): void {
    this.forList.push({ name: this.name });
    this.name = '';
  }


  ngOnInit(): void {
    setInterval(() => {
      this.toggleClass = !this.toggleClass;

      if (this.width == '200px') {
        this.width = '500px';
        this.background = 'pink';
      } else {
        this.width = '200px';
        this.background = 'green';
      }

    }, 2000)
  }


}
