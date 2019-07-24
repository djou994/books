import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import {Book} from '../model/book';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:3000/books';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<Book[]> {
    return this.http.get<Book[]>(apiUrl)
      .pipe(
        tap(books => console.log('leu os books')),
        catchError(this.handleError('getProdutos', []))
      );
  }

  getProduto(id: number): Observable<Book> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Book>(url).pipe(
      tap(_ => console.log(`leu o book id=${id}`)),
      catchError(this.handleError<Book>(`getProduto id=${id}`))
    );
  }

  addProduto(book): Observable<Book> {
    return this.http.post<Book>(apiUrl, book, httpOptions).pipe(
      tap(b => console.log(`adicionou o book com w/ id=${b._id}`)),
      catchError(this.handleError<Book>('addProduto'))
    );
  }

  updateProduto(id, produto): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, produto, httpOptions).pipe(
      tap(_ => console.log(`atualiza o produco com id=${id}`)),
      catchError(this.handleError<any>('updateProduto'))
    );
  }

  deleteProduto(id): Observable<Book> {
    const url = `${apiUrl}/delete/${id}`;

    return this.http.delete<Book>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o book com id=${id}`)),
      catchError(this.handleError<Book>('deleteProduto'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
