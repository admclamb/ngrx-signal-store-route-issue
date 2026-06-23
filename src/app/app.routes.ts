import { Routes } from '@angular/router';
import { Home } from './home/home';
import { BookStore } from './book/book-store';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'books/:id',
    providers: [BookStore],
    loadComponent: () => import('./book/book').then((m) => m.Book),
  },
];
