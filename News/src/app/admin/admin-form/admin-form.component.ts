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
  
  id: string;
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
        this.id = params['id'];
        if (this.id) {
          this.editForm = true;
          // get news by ID
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
    console.log(this.singleNews.title);
  }

  onSubmit() {
    if (this.editForm) {
      this.mysqlService.updateNews(this.adminForm.value)
          .subscribe(
            //   (response: any) => {
                
            // }
          );
          this.router.navigate(['admin', 'news', 'list']);
                // saljemo PUT request
      
    } else {
      this.mysqlService.storeNews(this.adminForm.value)
          .subscribe(
              // (response: any) => {
                
              // }
          );
          this.router.navigate(['admin', 'news', 'list']);
                // saljemo POST request
       }
  }
}
