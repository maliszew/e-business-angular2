import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { LogInComponent } from "./login/login.component";
import { ProductComponent } from './product/product.component';
// import { ProductListComponent } from './product/productsList.component';
// import { ProductAddComponent } from './product/productAdd.component';
import {RouterModule} from "@angular/router";
import {ProductService} from "./product/product.service";
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { ProductsListComponent } from './product/products-list/products-list.component';
import {OAuthService} from "./oauth.service";
import {LogInService} from "./login/login.service"


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    AddProductComponent,
    UpdateProductComponent,
    ProductsListComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'products2', component: ProductComponent},
      { path: 'product/add', component: AddProductComponent },
      { path: 'product/update', component: UpdateProductComponent },
      { path: 'products', component: ProductsListComponent },
      { path: 'product/:id', component: ProductComponent },
      { path: 'login', component: LogInComponent },
      // { path: 'category/:id', component: },
      { path: 'moreparams/:tytul/:opis', component: ProductComponent}
      ])
  ],
  providers: [ProductService, OAuthService, LogInService],
  bootstrap: [AppComponent]
})
export class AppModule { }
