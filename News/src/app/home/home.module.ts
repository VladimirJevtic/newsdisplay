import {NgModule} from '@angular/core';
import {NewsComponent} from './news/news.component';

@NgModule({
  declarations: [NewsComponent],
  exports: [NewsComponent]
})
export class HomeModule {}
