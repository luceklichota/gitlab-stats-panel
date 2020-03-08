import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCommitsComponent } from './user-commits.component';

describe('UserCommitsComponent', () => {
  let component: UserCommitsComponent;
  let fixture: ComponentFixture<UserCommitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCommitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCommitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
