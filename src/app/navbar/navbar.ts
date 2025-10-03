import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUserStoryDialog } from '../add-user-story-dialog/add-user-story-dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [MatIconModule, MatButtonModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  constructor(private dialog: MatDialog) {}

  openAddUserStoryDialog() {
    this.dialog.open(AddUserStoryDialog, {
      minWidth: '400px',
    });
  }
}
