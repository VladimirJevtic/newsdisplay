import {Category} from './category/category.model';
import {News} from './news/news.model';

export class NewsService {

  news: News[] = [
    new News(0, 'Basketball', 'Basketball Description', 'This is Basketball Text', 'Sport', 'Beograd'),
    new News(1, 'Football', 'Football Description', 'This is Football Text', 'Sport', 'Beograd'),
    new News(2, 'Game', 'Game Description', 'This is Game Text', 'Fun', 'Beograd'),
    new News(3, 'Show', 'Show Description', 'This is Show Text', 'Fun', 'Beograd')
  ];

  getCities() {
    // GET poziv za cities
    return ['Beograd', 'Novi Sad', 'Sabac'];
  }
  getNews() {
    return this.news.slice();
  }
  getCategories() {
    // GET poziv za category
    return ['Sport', 'Fun'];
  }

  getNewsFromCategory(id: number) {
  }
}
