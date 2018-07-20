import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';
import { ProductService } from '../../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;
  product = {};
  id;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService) {
      this.categories$ = this.categoryService.getCategories();
      this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) {
        this.productService.get(this.id).pipe(take(1)).subscribe(p => this.product = p);
      }
     }

  ngOnInit() {}

  save(value) {
    if (this.id) {
      this.productService.update(this.id, value);
    } else {
      this.productService.create(value);
    }
    this.router.navigateByUrl('/admin/products');
  }

  delete(){
    if (confirm('Are you sure you want to delete this?')) {
      this.productService.delete(this.id);
      this.router.navigateByUrl('/admin/products');
    }
  }

}
