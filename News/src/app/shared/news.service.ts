import {News} from './news/news.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable()
export class NewsService {
  newsChanged = new Subject<News[]>();

  news: News[] = [
    new News({id: 0, title: 'Basketball', description: 'Basketball Description', text: 'This is Basketball Text', category: 'Sport', city: 'Beograd'}),
    new News({id: 1, title: 'Football', description: 'Football Description', text: 'This is Football Text', category: 'Sport', city: 'Beograd'}),
    new News({id: 2, title: 'Game', description: 'Game Description', text: 'This is Game Text', category: 'Fun', city: 'Beograd'}),
    new News({id: 3, title: 'Show', description: 'Show Description', text: 'This is Show Text', category: 'Fun', city: 'Beograd'})
  ];

  getCities() {
    // GET poziv za cities
    return ['Beograd', 'Novi Sad', 'Sabac'];
  }
  getNews() {
    return this.news.slice();
  }

  getSingleNews(index: string) {
    return this.news[index];
  }
  getCategories() {
    // GET poziv za category
    return ['Sport', 'Fun'];
  }

  addSingleNews(singleNews: News) {
    this.news.push(singleNews);
    this.newsChanged.next(this.news.slice());
  }

  updateSingleNews(index: string, newSingleNews: News) {
    this.news[index] = newSingleNews;
    this.newsChanged.next(this.news.slice());
  }

}
