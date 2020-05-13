import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/app.product';
import { Logic } from '../../models/app.logic';
import { Categories } from '../../models/app.constants';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  product: Product;
  products: Array<Product>;
  private logic: Logic;
  cats = Categories;
  headers: Array<string>;
  constructor() {
    this.product = new Product(0, '', 0, '');
    this.products = new Array<Product>();
    this.logic = new Logic();
    this.headers = new Array<string>();
  }

  ngOnInit(): void {
    this.products = this.logic.getProducts();
    // tslint:disable-next-line: forin
    for (const p in this.product) {
      this.headers.push(p);
    }
  }

  clear(): void {
    this.product = new Product(0, '', 0, '');
  }

  save(): void {
    this.products = this.logic.saveProduct(this.product);
    console.log(JSON.stringify(this.products));
  }

  delete(product: Product) {
    this.products = this.logic.removeProduct(product);
  }

  editProduct(p: Product): void {
    this.product = Object.assign({}, p);
  }

  sortProducts(reverse: boolean = false) {
    this.products = this.logic.sortProducts(reverse);
  }

  searchProducts(event: any) {
    this.products = this.logic.searchProdcuts(event.target.value);
  }
}
