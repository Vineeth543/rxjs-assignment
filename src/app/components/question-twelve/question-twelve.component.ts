import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { debounceTime, fromEvent, map } from 'rxjs';

interface Book {
  id: number;
  name: string;
  category: string;
}

@Component({
  selector: 'app-question-twelve',
  templateUrl: './question-twelve.component.html',
  styleUrls: ['./question-twelve.component.less'],
})
export class QuestionTwelveComponent {
  books!: Book[];
  serachedBook!: Book;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<Book[]>('../../assets/books.json')
      .subscribe((books: Book[]) => {
        this.books = books;
      });

    fromEvent(document.getElementById('search-book')!, 'input')
      .pipe(
        debounceTime(500),
        map((event: Event) => {
          let bookId = (event.target as HTMLInputElement).value;
          return this.books.filter((book) => book.id === parseInt(bookId))[0];
        })
      )
      .subscribe((book) => {
        this.serachedBook = book;
      });
  }
}
