import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../product';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm: FormGroup;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.productForm = new FormGroup({
      tytul: new FormControl('tytul', Validators.required),
      opis: new FormControl('opis', Validators.required)
    });

    console.log(this.route.snapshot.params);
  }

  addProduct(event) {
    console.log(event);
    console.log(this.productForm.value);
    this.productService.sendToPlay(this.productForm.value);
  }


}
