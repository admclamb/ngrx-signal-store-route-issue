import { Component, inject } from '@angular/core';
import { BookStore } from './book-store';

@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.html',
  styleUrl: './book.css',
})
export class Book {
  bookStore = inject(BookStore);
}
