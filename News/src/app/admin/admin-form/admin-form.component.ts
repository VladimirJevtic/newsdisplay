import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {News} from '../../shared/news/news.model';
import {NewsService} from '../../shared/news.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnInit {
  
  id: string;
  editForm = false;
  adminForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private newService: NewsService,
              private router: Router) { }

  ngOnInit() {
    this.subscribeToRoute();
  }

  private subscribeToRoute() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        if (this.id) {
          this.editForm = true;
          // get news by ID
          this.initForm();
        }
        else{
          this.initForm();
        }
      }
    );
  }

  private initForm() {
    let newsTitle = '';
    let newsDescription = '';
    let newsText = '';

    if(this.editForm){
      const singleNews = this.newService.getSingleNews(this.id);
      newsTitle = singleNews.title;
      newsDescription = singleNews.description;
      newsText = singleNews.text;
    }

    this.adminForm = new FormGroup({
      'title': new FormControl(newsTitle, Validators.required),
      'description': new FormControl(newsDescription, Validators.required),
      'text': new FormControl(newsText, Validators.required)
    });
  }

  onSubmit() {
    if (this.editForm) {
      this.newService.updateSingleNews(this.id, this.adminForm.value);
       this.router.navigate(['admin', 'news', 'list']);
       // saljemo POST request
    } else {
      this.newService.addSingleNews(this.adminForm.value);
      this.router.navigate(['admin', 'news', 'list']);
      // saljemo PUT request
    }
  }
}
