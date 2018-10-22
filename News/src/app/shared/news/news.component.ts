import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../category/category.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  @Input() category: Category;
  @Input() categoryDefault: Category;

  constructor() { }

  ngOnInit() {
  }
}


