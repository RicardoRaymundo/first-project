import { Component, Input, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnDestroy {

  @Input() public title: string = 'Bem vindo!';

  constructor() { }

  ngOnDestroy(): void {
    console.log('DESTRUIRDO');
  }

}
