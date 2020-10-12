import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseContainerComponent } from './expense-container.component';

describe('ExpenseComponent', () => {
  let component: ExpenseContainerComponent;
  let fixture: ComponentFixture<ExpenseContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
