import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() myProduct: IProduct | null = null;
  @Output() newEnvent = new EventEmitter<number>();
  buy() {
// this.newEnvent.emit()
  }
}
