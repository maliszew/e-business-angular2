import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import {Product} from "./product";
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  constructor(private http: Http) { }

  getProducts() {
    const headers: Headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    const options = new RequestOptions({headers: headers});

    return this.http.get('http://localhost:9000/products', options)
      .map(response => <Product[]>response.json());
  }

  getOneProduct(id) {
    const headers: Headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    //headers.append('Access-Control-Allow-Origin','*');

    const options = new RequestOptions({headers: headers});

    return this.http.get('http://localhost:9000/products/' + id, options)
      .map(response => <Product>response.json());
  }

  addProduct(formData) {
    const serializedForm = JSON.stringify(formData);
    // console.log(serializedForm);

    const headers: Headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    const options = new RequestOptions({headers: headers});

    this.http.post('http://localhost:9000/products/new', serializedForm, options)
      .subscribe(
        data => console.log('wyslane!', data),
        error => console.error('nie bangla', error)
      );
  }

  updateProduct(formData, id) {
    const serializedForm = JSON.stringify(formData);
    // console.log(serializedForm);
    console.log("id do update: " + serializedForm);

    const headers: Headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    const options = new RequestOptions({headers: headers});

    this.http.post('http://localhost:9000/products/' + formData.prodId, serializedForm, options)
      .subscribe(
        data => console.log('update ok!', data),
        error => console.error('update nie bangla', error)
      );
  }

}
