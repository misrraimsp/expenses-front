import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        NavbarComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the navbar', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const de = fixture.debugElement;
    expect(de.query(By.css('app-navbar'))).toBeTruthy();
  });

  it('should render the router-outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const de = fixture.debugElement;
    expect(de.query(By.css('router-outlet'))).toBeTruthy();
  });

  /*
  it(`should have as title 'first-spa'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('first-spa');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('first-spa app is running!');
  });

   */
});
