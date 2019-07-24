import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BooksListComponent} from './books-list/books-list.component';
import {BooksDetailComponent} from './books-detail/books-detail.component';
import {BooksEditComponent} from './books-edit/books-edit.component';
import {BooksAddComponent} from './books-add/books-add.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  {
    path: 'books',
    component: BooksListComponent,
    data: {title: 'Books List'}
  },
  {
    path: 'books/:id',
    component: BooksDetailComponent,
    data: { title: 'Books details' }
  },
  {
    path: 'books-add',
    component: BooksAddComponent,
    data: { title: 'Product Add' }
  },
  {
    path: 'books/edit/:id',
    component: BooksEditComponent,
    data: { title: 'Product Edit' }
  },
];

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BooksDetailComponent,
    BooksEditComponent,
    BooksAddComponent,
    BooksListComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
