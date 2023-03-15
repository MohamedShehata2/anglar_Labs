import { Component } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import  Products  from '../../models/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent {
  // allProducts:IProduct[]=Products();
  allProducts: any= [];
  constructor(private productService: ProductService) { } // initalization
  ngOnInit(): void {
  this.productService.getAllProduct().subscribe(
    {
      next:(res)=>{
        this.allProducts = res;  

      },
      error:(err)=>{
        console.log(err)
      }
    }
    // (res)=>{
    // console.log(res);
    // }
    );
  }
  remove(id:number){
    this.productService.delete(id).subscribe({
      next:(res)=>{
        this.allProducts =this.allProducts.filter((item:any)=>item.id!=id);
        console.log(res)
      },
      error: (err) => {
        console.log(err)
      }
    })
    // this.productService.delete(id);
    // console.log(id)
    // this.allProducts =this.allProducts.filter((item)=> item.id!=id)
  }
  getProduct(id:number){
    
  }

}
