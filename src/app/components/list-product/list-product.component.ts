import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  listProduct: Product[] = []
  constructor(private _service: ProductService) { }
  ngOnInit(): void {
    this._service.getAll().subscribe(products => this.listProduct = products);
  }
}