import { Component, OnInit } from '@angular/core';
import { ProducService } from '../../services/product.service'

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  price     :number = 295.95;
  total     :number;
  typeColor :boolean;
  coverage  :boolean;
  feature   :boolean;

  constructor(
    public _productService: ProducService
  ) { }

  ngOnInit(): void {
    this._productService.setTotal(this.price);
  }

  setCoverage(action: boolean) {
    this.coverage = action;
    console.log(this.coverage);
    
    this.calc();
  }
  setFeature(action: boolean) {
    this.feature = action;
    this.calc();
  }

  calc() {
    this.total = this.price;

    if (this.coverage) {
      this.total = this.total + 75;
    }
    if (this.feature) {
      this.total = this.total + 25;
    }

    this._productService.setTotal(this.total);
  }

}
