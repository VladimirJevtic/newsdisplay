import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {News} from '../../shared/news/news.model';
import {NewsService} from '../../shared/news.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


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
  news: News = new News(
    {title: '',
    description: '',
    text: ''}
    );
  id: string;
  type: Type = Type.CREATE;
  adminForm: FormGroup;

  constructor(private route: ActivatedRoute,
  private newService: NewsService) { }

  ngOnInit() {
    this.adminForm = new FormGroup({
      'title': new FormControl(this.news.title, Validators.required),
      'description': new FormControl(this.news.description, Validators.required),
      'text': new FormControl(this.news.text, Validators.required)
    });
    this.subscribeToRoute();
    // this.getAllCategories();
  }

  private subscribeToRoute() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        if (this.id) {
          this.type = Type.UPDATE;
          // get news by id
        }
      });
  }

  onSubmit() {
    console.log(this.adminForm);
  }
   private getAllCategories() {
  // get all categories
   }
}
