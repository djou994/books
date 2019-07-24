import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../rest.service';

@Component({
  selector: 'app-books-add',
  templateUrl: './books-add.component.html',
  styleUrls: ['./books-add.component.css']
})
export class BooksAddComponent implements OnInit {

  @Input() productData = { code: '', title: '', author: '' };

  constructor(public rest: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  addProduct() {
    this.rest.addProduto(this.productData).subscribe((result) => {
      this.router.navigate(['/' + result._id]);
    }, (err) => {
      console.log(err);
    });
  }

}
