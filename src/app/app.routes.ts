import { Routes } from '@angular/router';
import { ListComponent } from './crud/list/list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: ListComponent,
  },
];
