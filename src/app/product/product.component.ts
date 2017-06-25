import { Component, OnInit } from '@angular/core';
import {ProductService} from './product.service';
import {Product} from './product';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product;
  id: number;


  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.productService.getOneProduct(this.id).subscribe(
      data => {this.product = data,
      console.log("--->", data)},
      error => console.log(error, " ---"));

    console.log("id: " + this.id);
    console.log("product:");
    console.log(this.product);

  }



}
