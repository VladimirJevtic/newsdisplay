import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnInit {


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
