import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { Router } from '@angular/router';

import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Observable<Product[]> | any;

  constructor(private productService:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData()
  {
    this.products=this.productService.getProductList();
  }
  productDetails(id:string)
  {
    this.router.navigate(['details',id]);
  }
  editProduct(id:string)
  {
    this.router.navigate(['update',id]);  // navigate to component from method
  }
  deleteProduct(id: string) {
    this.productService.deleteProduct(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
}