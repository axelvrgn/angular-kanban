import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-add-user-story-dialog',
  imports: [MatDialogModule, FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './add-user-story-dialog.html',
  styleUrl: './add-user-story-dialog.scss',
})
export class AddUserStoryDialog {
  ticketName: string = '';
  ticketDescription: string = '';

  constructor(public dialogRef: MatDialogRef<AddUserStoryDialog>) {}

  addTicket() {
    this.dialogRef.close({
      name: this.ticketName,
      description: this.ticketDescription,
    });
  }

  close() {
    this.dialogRef.close();
  }
}
