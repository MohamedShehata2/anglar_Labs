import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/iproduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})

export class EditProductComponent implements OnInit {

  productId: number = 0;
  product: any | null = null;

  productForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    price: new FormControl("", [Validators.required, Validators.min(1)]),
    imageURL: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required]),
    quantity: new FormControl("", [Validators.required]),
    // fileSource: new FormControl('', [Validators.required])

  })

  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute,

  ) {
    this.activatedRoute.paramMap.subscribe((pram) => {
      this.productId = Number(pram.get('id'));
    })
    this.productForm.controls["name"].setValue('');
    this.productForm.controls["price"].setValue('');
    // this.productForm.controls["imageURL"].setValue(this.product?.imageURL);
    this.productForm.controls["quantity"].setValue('');
    this.productForm.controls["description"].setValue('');

  }

  ngOnInit(): void {
    if (this.productId!=0) {

      this.productService.getProductById(this.productId).subscribe({
        next: (res) => {
          this.product = res;
          this.productForm.controls["name"].setValue(this.product?.name);
          this.productForm.controls["price"].setValue(this.product?.price);
          // this.productForm.controls["imageURL"].setValue(this.product?.imageURL);
          this.productForm.controls["quantity"].setValue(this.product?.quantity);
          this.productForm.controls["description"].setValue(this.product?.description);
        }
      });


    } 
  }


  // file :any | null=null;
  // handleFileInput(e:any){
  //   this.file=e.target.files[0];
  //   this.productForm.patchValue({
  //     fileSource:this.file
  //   });
  //   console.log(this.file);
  // }


  submitForm(e: any) {
    e.preventDefault();
    if (this.productForm.status == 'VALID') {

      if (this.productId == 0) {
        this.productService.addProduct(this.productForm.value).subscribe()

      } else {
        this.productService.editProduct(this.productId, this.productForm.value).subscribe()
      }
      this.router.navigate(['/products']);
    }
  }

  get getProductName() {
    return this.productForm.controls["name"];
  }
  // get getProductFileSource() {
  // return this.productForm.controls;
  // }
  get getProductPrice() {
    return this.productForm.controls["price"];
  }
  get getProductQuantity() {
    return this.productForm.controls["quantity"];
  }
  get getProductImageUrl() {
    return this.productForm.controls["imageURL"];
  }
  get getProductDescription() {
    return this.productForm.controls["description"];
  }

}
