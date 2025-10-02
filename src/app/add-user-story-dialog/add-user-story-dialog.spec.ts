import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserStoryDialog } from './add-user-story-dialog';

describe('AddUserStoryDialog', () => {
  let component: AddUserStoryDialog;
  let fixture: ComponentFixture<AddUserStoryDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddUserStoryDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserStoryDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
