import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product, Products } from '../../types';
import { ProductComponent } from "../components/product/product.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(
    private productService: ProductsService
  ){}

  products: Product[] = [];

  //this function is called when we initilized our component
  //we are clling the product service which is calling the get product which returns an observable []
  ngOnInit() {
    this.productService.getProducts('http://localhost:3000/clothes', {page: 0, perPage:5}).subscribe((products: Products) => {
      this.products = products.items;
    })
  }
}
