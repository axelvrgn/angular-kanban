import { CdkDrag } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-story',
  imports: [CommonModule, CdkDrag],
  templateUrl: './user-story.html',
  styleUrl: './user-story.scss',
})
export class UserStory {
  @Input() item!: string;
  @Input() index!: number;
  @Output() remove = new EventEmitter<number>();
}
