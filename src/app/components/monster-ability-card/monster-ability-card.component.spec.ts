import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterAbilityCardComponent } from './monster-ability-card.component';

describe('MonsterAbilityCardComponent', () => {
  let component: MonsterAbilityCardComponent;
  let fixture: ComponentFixture<MonsterAbilityCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonsterAbilityCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterAbilityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
