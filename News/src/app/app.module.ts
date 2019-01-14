import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {AuthModule} from './auth/auth.module';
import {SharedModule} from './shared/shared.module';
import {NewsService} from './shared/news.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MysqlService } from './shared/mysql.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    NgbModule
  ],
  providers: [NewsService, MysqlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
