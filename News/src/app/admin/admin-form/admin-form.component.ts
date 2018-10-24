import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {News} from '../../shared/news/news.model';
import {NewsService} from '../../shared/news.service';

enum Type {
  CREATE = 'create',
  UPDATE = 'update'
}

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnInit {
  news: News;
  id: string;
  type: Type = Type.CREATE;
  // news = new News();

  constructor(private route: ActivatedRoute,
  private newService: NewsService) { }

  ngOnInit() {
    this.subscribeToRoute();
    // this.getAllCategories();
  }

  private subscribeToRoute() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];

        if (this.id === 'create') {
            // POST News to backend
        } else {
          this.type = Type.UPDATE;
          // get News from Api by ID
        }
      }
    );
  }

  // private getAllCategories() {
  // get all categories
  // }
}
