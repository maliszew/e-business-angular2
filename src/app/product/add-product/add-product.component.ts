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
      opis: new FormControl('opis', Validators.required),
      cena: new FormControl('cena', Validators.required),
      imgUrl: new FormControl('imgUrl', Validators.required),
      kategoriaId: new FormControl('kategoriaId', Validators.required),
      prodId: new FormControl('prodId', Validators.required),
    });

    console.log(this.route.snapshot.params);
  }

  addNewProduct(event) {
    console.log(event);
    console.log(this.productForm.value);
    this.productService.addProduct(this.productForm.value);
  }


}
