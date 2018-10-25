import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  categorySelectedObj: string;
  firstCategoryDefault: string;
  constructor() { }

  ngOnInit() {
  }

  onCategoryHandler(category: string) {
    this.categorySelectedObj = category;
  }
}
