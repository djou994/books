import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../rest.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-books-edit',
  templateUrl: './books-edit.component.html',
  styleUrls: ['./books-edit.component.css']
})
export class BooksEditComponent implements OnInit {

  @Input() productData = { code: '', title: '', author: '' };
  book: any;

  constructor(public rest: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getProduto(this.route.snapshot.params.id).subscribe((data: {}) => {
      console.log(data);
      this.book = data;
    });
  }

  updateProduct() {
    this.rest.updateProduto(this.route.snapshot.params.id, this.productData).subscribe((result) => {
      this.router.navigate(['/' + result._id]);
    }, (err) => {
      console.log(err);
    });
  }
}
