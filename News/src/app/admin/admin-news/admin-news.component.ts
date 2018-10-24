import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/shared/category/category.model';

@Component({
  selector: 'app-admin-news-edit',
  templateUrl: './admin-news.component.html',
  styleUrls: ['./admin-news.component.css']
})
export class AdminNewsComponent implements OnInit {

  categorySelectedObj: Category;
  firstCategoryDefault: Category;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onCategoryHandler(category: Category) {
    this.categorySelectedObj = category;
  }
  firstCategoryHandler(categoryDefault: Category) {
    this.firstCategoryDefault = categoryDefault;
  }

  goToNewsProfile(id: number) {
    this.router.navigate(['admin', 'news', id]);
  }

}
