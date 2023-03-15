import { AuthGuard } from './guards/auth.guard';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
          ProductsTableComponent,
          ProductDetailsComponent,
          
          EditProductComponent,
        ],
  imports: [
    RouterModule.forChild([{
        path: 'products',
        // canActivate:[AuthGuard],
        children: [
          { path: "edit/:id", component: EditProductComponent },
          { path: '', component: ProductsTableComponent },
          { path: ':id', component: ProductDetailsComponent },
        ],
      },
    ]),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
