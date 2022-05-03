import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterStatCardComponent } from './monster-stat-card.component';

describe('MonsterStatCardComponent', () => {
  let component: MonsterStatCardComponent;
  let fixture: ComponentFixture<MonsterStatCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonsterStatCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterStatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
