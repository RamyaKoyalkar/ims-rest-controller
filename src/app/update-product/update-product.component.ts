import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router,ActivatedRoute } from '@angular/router';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id: string | any;
  product: Product | any;
  submitted = false;
  products: Observable<Product[]> | any;

  constructor(private route: ActivatedRoute,private router: Router,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.product = new Product();
   
    this.id = this.route.snapshot.params['id'];
    
    this.productService.getProduct(this.id)
    .subscribe(data => {
      console.log(data)
      this.product = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.updateProduct();    
  }
  
  updateProduct() {
    this.productService.updateProduct(this.id, this.product)
      .subscribe(data => console.log(data),
      error => console.log(error));
    this.product = new Product();
    this.reloadData();
    this.gotoList();
  }
 
  reloadData() {
    this.products = this.productService.getProductList();
  }
  gotoList() {
    this.router.navigate(['/products']).then(() => {
      window.location.reload();
    });
  }

}
