import { Routes } from '@angular/router';
import { Register } from './register/register';
import { Auth } from './auth/auth';
import { Table } from './table/table';

export const routes: Routes = [
  { path: 'login', component: Auth },
  { path: 'register', component: Register },
  { path: 'kanban', component: Table },
];
