import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent implements OnInit {
  @Input() fixed: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
