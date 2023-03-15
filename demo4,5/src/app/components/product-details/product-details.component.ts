import { Component ,OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productId: number = 0;
  product:  any = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {
    this.productId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }
  ngOnInit(): void {
    if (this.productId) {
      this.productService.getProductById(this.productId).subscribe({
        next:(res)=>{
          this.product=res;
        },
        error:(err)=>{
          console.log(err);
        }
      });
    } else {
      this.router.navigate(['/products']);
    }
  }
}
