import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationMenusComponent } from './application-menus.component';

describe('ApplicationMenusComponent', () => {
  let component: ApplicationMenusComponent;
  let fixture: ComponentFixture<ApplicationMenusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationMenusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
