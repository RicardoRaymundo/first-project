import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtributeDirectivesComponent } from './atribute-directives.component';

describe('AtributeDirectivesComponent', () => {
  let component: AtributeDirectivesComponent;
  let fixture: ComponentFixture<AtributeDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtributeDirectivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtributeDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
