import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {News} from '../../shared/news/news.model';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { MysqlService } from 'src/app/shared/mysql.service';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnInit {
  
  id: number;
  editForm = false;
  adminForm: FormGroup;
  singleNews = new News({});

  constructor(private route: ActivatedRoute,
              private mysqlService: MysqlService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.mysqlService.getAll().subscribe(data => console.log(data));
    this.subscribeToRoute();
  }

  private subscribeToRoute() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editForm = params['id'] != null;
        this.initForm();
        if (this.editForm == true) {
          this.mysqlService.getNewsById(this.id)
          .subscribe(
              (response: News) => {
                this.singleNews = response;
                this.initForm();
              }
          );
        }
        else{
          this.initForm();
        }
      }
    );
  }

  private initForm() {

    this.adminForm = this.formBuilder.group({
      'title': new FormControl(this.singleNews.title, Validators.required),
      'description': new FormControl(this.singleNews.description, Validators.required),
      'text': new FormControl(this.singleNews.text, Validators.required),
      'date': new FormControl(this.singleNews.date, Validators.required),
      'category': new FormControl(this.singleNews.category, Validators.required),
      'city': new FormControl(this.singleNews.city, Validators.required),
      'pathToPicture': new FormControl(this.singleNews.pathToPicture, Validators.required)
    });
  }

  onSubmit() {
    if (this.editForm) {
      const news = this.adminForm.value;
      news.newsID = this.id;
      this.mysqlService.updateNews(news)
          .subscribe(
              (response: any) => {
                this.singleNews = response;
                this.router.navigate(['home', 'news', 'list']);
            }
          ); 
    } else {
      this.mysqlService.storeNews(this.adminForm.value)
          .subscribe(
              (response: any) => {
                this.singleNews = response;
                this.router.navigate(['home', 'news', 'list']);
              }
          );
       }
  }
}
