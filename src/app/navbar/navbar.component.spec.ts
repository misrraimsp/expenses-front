import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { By } from '@angular/platform-browser';
import {RouterLink, RouterLinkWithHref} from '@angular/router';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should have a link to home page', () => {
    // const de = fixture.debugElement.query(By.css('a[href="/balance"]'));
    const des = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    const index = des.findIndex(de => de.properties.href === '/balance');

    expect(index).toBeGreaterThan(-1);
    // expect(de).toBeTruthy();
  });

});
