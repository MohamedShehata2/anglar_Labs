import { ProductService } from 'src/app/services/product.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import Products from '../../models/products';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  ProductsList: any | null=null;
  constructor(
    private productservice: ProductService
    ){
    }
  
    ngOnInit(){

       this.productservice.getAllProduct().subscribe(
        {
          next: (res) => {
            this.ProductsList = res;

          },
          error: (err) => {
            console.log(err)
          }
        })
    }

  
}
