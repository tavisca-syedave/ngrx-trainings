import { Product } from './app.product';
import { Products } from './app.constants';

export class Logic {
  private products: Array<Product>;
  private prds = Products;
  constructor() {
    this.products = new Array<Product>();
    this.prds.forEach((p, i) => {
      this.products.push(
        new Product(p.ProductId, p.ProductName, p.Price, p.Catgory)
      );
    });
  }

  getProducts(): Array<Product> {
    return this.products;
  }

  saveProduct(product: Product): Array<Product> {
    let index = this.getProductIndex(product);
    if (index > -1) {
      this.products.splice(index, 1, product);
    } else {
      this.products.push(product);
    }

    return this.products;
  }

  removeProduct(product: Product): Array<Product> {
    let index = this.getProductIndex(product);

    if (index > -1) {
      this.products.splice(index, 1);
      return this.products;
    }
  }

  private getProductIndex(product: Product) {
    return this.products.findIndex(
      (prd) => prd.ProductId === product.ProductId
    );
  }

  sortProducts(reverse: boolean): Array<Product> {
    this.products.sort((p1, p2) => {
      if (p1.ProductName > p2.ProductName) {
        return 1;
      }
      if (p1.ProductName < p2.ProductName) {
        return -1;
      }
      return 0;
    });
    return reverse ? this.products.reverse() : this.products;
  }

  searchProdcuts(value: any): Array<Product> {
    return this.products.filter((product) => {
      return (
        product.ProductName.toLowerCase().includes(value.toLowerCase()) ||
        product.Category.toLowerCase().includes(value.toLowerCase())
      );
    });
  }
}
