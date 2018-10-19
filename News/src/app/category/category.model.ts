import {News} from '../home/news/news.model';

export class Category {
  public name: string;
  public newsArray: News[];

  constructor(name: string, news: News[]) {
    this.name = name;
    this.newsArray = news;
  }
}
