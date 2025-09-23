import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStoryDialog } from './user-story-dialog';

describe('UserStoryDialog', () => {
  let component: UserStoryDialog;
  let fixture: ComponentFixture<UserStoryDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserStoryDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserStoryDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
