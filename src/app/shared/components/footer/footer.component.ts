import { Component, Input, OnInit } from '@angular/core';
import { ProducService } from '../../../services/product.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() total: number;
  constructor(
    public _productService: ProducService
  ) { }

  ngOnInit(): void {
    this._productService.total$.subscribe((res: any)   => {
      this.total = res;
    })
  }

}
