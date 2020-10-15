import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { By } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, NavbarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app-component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the navbar', () => {
    expect(fixture.debugElement.query(By.css('app-navbar'))).toBeTruthy();
  });

  it('should render the router-outlet', () => {
    expect(fixture.debugElement.query(By.directive(RouterOutlet))).toBeTruthy();
  });

});
