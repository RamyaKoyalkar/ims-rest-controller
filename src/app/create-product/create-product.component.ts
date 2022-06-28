import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product:Product = new Product();
  submitted=false;

  constructor(private productService:ProductService,
                 private router:Router) { }

  ngOnInit(): void {
  }

  newProduct(): void {
    this.submitted = false;
    this.product= new Product();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();    
  }
 
  save() {
    this.productService.newProduct(this.product)
      .subscribe(data => console.log(data), error => console.log(error));
    this.product= new Product();
    this.gotoList();
  }
 
  gotoList() {
    this.router.navigate(['/products']).then(() => {
      window.location.reload();
    });
  }

}
