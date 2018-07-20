import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { map } from '@firebase/util';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  products$;
  constructor(private productService: ProductService) {
    this.products$ = this.productService.getAll();
   }

  ngOnInit() {
  }

}
