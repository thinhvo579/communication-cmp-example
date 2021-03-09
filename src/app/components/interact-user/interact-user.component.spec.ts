import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractUserComponent } from './interact-user.component';

describe('InteractUserComponent', () => {
  let component: InteractUserComponent;
  let fixture: ComponentFixture<InteractUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
