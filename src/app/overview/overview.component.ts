import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  fruits: any[] | undefined;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fruits = this.productService.getFruits();
  }
}