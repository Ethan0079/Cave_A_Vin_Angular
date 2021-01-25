import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCaveComponent } from './card-cave.component';

describe('CardCaveComponent', () => {
  let component: CardCaveComponent;
  let fixture: ComponentFixture<CardCaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
