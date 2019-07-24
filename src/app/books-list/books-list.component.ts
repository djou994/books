import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../rest.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  books: any = [];

  constructor(public rest: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.rest.getProdutos().subscribe((data: {}) => {
      console.log(data);
      this.books = data;
    });
  }

  add() {
    this.router.navigate(['/books-add']);
  }
}
