import { CdkDrag, CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-column',
  imports: [CommonModule, CdkDropList, CdkDrag],
  templateUrl: './column.html',
  styleUrl: './column.scss',
})
export class Column {
  @Input() title!: string;
  @Input() items!: string[];
  @Input() drop!: (event: CdkDragDrop<string[]>) => void;
  @Input() listId!: string;
  @Input() connectedTo!: string[];
}
