import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Slide } from 'src/app/models/slide';
import { Tab } from 'src/app/models/tabs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemsTabs: Tab[] = ITEM_TABS;
  activeIndex: number = 0;
  slides: Slide[] = DATA_SLIDE;
  constructor() { }

  ngOnInit(): void {

  }

  selectedTab(tab: Tab) {
    this.itemsTabs.forEach(element => {
      if (element = tab) {
        this.activeIndex = this.itemsTabs.indexOf(element);
      }
    });
  }
}



const ITEM_TABS = [
  { id: 0, label: 'Overview'},
  { id: 1, label: 'Features'},
  { id: 3, label: "What's in the box?"}
] 
const DATA_SLIDE = [
  {headline: 'TEST', src: 'assets/img/01.svg'},
  {headline: 'TEST 2', src: 'assets/img/02.svg'},
  {headline: 'TEST 3', src: 'assets/img/03.svg'}
]