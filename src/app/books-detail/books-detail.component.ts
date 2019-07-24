import { Component, OnInit } from '@angular/core';
import {ApiService} from '../rest.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-books-detail',
  templateUrl: './books-detail.component.html',
  styleUrls: ['./books-detail.component.css']
})
export class BooksDetailComponent implements OnInit {
  book: any;

  constructor(public rest: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getBookDetail();
  }

  getBookDetail() {
    this.rest.getProduto(this.route.snapshot.params.id).subscribe((data: {}) => {
      console.log(data);
      this.book = data;
    });
  }

  add() {
    this.router.navigate(['/books-add']);
  }

}
