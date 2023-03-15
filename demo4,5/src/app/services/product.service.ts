import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';
// import Products from '../models/products';
import { HttpClient } from '@angular/common/http';
// import { IProduct } from 'src/app/models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  baseURL: string = "http://localhost:3000/products";

  getAllProduct(){
    return this.http.get(this.baseURL);
  }

  addProduct(product:any){
    // Products.push(product);
  return this.http.post(this.baseURL,product)
  }

  editProduct(id:number,product: any) {
    // let productIndex=Products.findIndex(item=>item.id===id);
    // Products[productIndex].name = product.name;
    // Products[productIndex].price=product.price;
    // Products[productIndex].quantity=product.quantity;
    // Products[productIndex].imageURL=product.imageURL;
    // Products[productIndex].description = product.description;
    // console.log(Products[productIndex]);
    return this.http.put(`${this.baseURL}/${id}`,product);

  }

  getProductById(productId: number) {
    return this.http.get(`${this.baseURL}/${productId}`)
    // return Products.filter((product) => product.id == productId)[0];
  }
  delete(id:number){
    return this.http.delete(`${this.baseURL}/${id}`)
    // Products = Products.filter((item) => item.id != id)
  }
}
