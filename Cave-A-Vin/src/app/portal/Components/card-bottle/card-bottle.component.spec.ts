import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBottleComponent } from './card-bottle.component';

describe('CardBottleComponent', () => {
  let component: CardBottleComponent;
  let fixture: ComponentFixture<CardBottleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardBottleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBottleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
