import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../product';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

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

  updateExistingProduct(event) {
    console.log(event);
    console.log(this.productForm.value);
    this.productService.updateProduct(this.productForm.value, this.productForm.value.prodId);
  }


}
