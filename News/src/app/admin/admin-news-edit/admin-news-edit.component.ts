import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Category } from 'src/app/shared/category/category.model';

@Component({
  selector: 'app-admin-news-edit',
  templateUrl: './admin-news-edit.component.html',
  styleUrls: ['./admin-news-edit.component.css']
})
export class AdminNewsEditComponent implements OnInit {

  @Input() firs


  constructor() { }

  ngOnInit() {
  }


}
