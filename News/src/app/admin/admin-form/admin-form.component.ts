import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {News} from '../../shared/news/news.model';
import {NewsService} from '../../shared/news.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MysqlService } from 'src/app/shared/mysql.service';
import { Response } from '@angular/http/src/static_response';
import { log } from 'util';

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
              private mysqlService: MysqlService,
              private router: Router) { }

  ngOnInit() {
    this.mysqlService.getAll().subscribe(data => console.log(data));
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
    let newsDate = '';
    let newsCategory = '';
    let newsCity = '';
    let newsPathToPicture = '';

    if(this.editForm){
      const singleNews = this.newService.getSingleNews(this.id);
      newsTitle = singleNews.title;
      newsDescription = singleNews.description;
      newsText = singleNews.text;
      newsDate = singleNews.date;
      newsCategory = singleNews.category;
      newsCity = singleNews.city;
      newsPathToPicture = singleNews.pathToPicture;
    }

    this.adminForm = new FormGroup({
      'title': new FormControl(newsTitle, Validators.required),
      'description': new FormControl(newsDescription, Validators.required),
      'text': new FormControl(newsText, Validators.required),
      'date': new FormControl(newsDate, Validators.required),
      'category': new FormControl(newsCategory, Validators.required),
      'city': new FormControl(newsCity, Validators.required),
      'pathToPicture': new FormControl(newsPathToPicture, Validators.required)
    });
  }

  onSubmit() {
    if (this.editForm) {
      this.newService.updateSingleNews(this.id, this.adminForm.value);
       this.router.navigate(['admin', 'news', 'list']);
       // saljemo PUT request
    } else {
      this.newService.addSingleNews(this.adminForm.value);
      this.mysqlService.storeNews(this.adminForm.value)
          .subscribe(
              // (response: Response) => {
              //   console.log(response);
              // }
            );
      this.router.navigate(['admin', 'news', 'list']);
      // saljemo POST request
    }
  }
}
