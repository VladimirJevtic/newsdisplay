import {News} from './news/news.model';

export class NewsService {

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
    return this.news;
  }
  getCategories() {
    // GET poziv za category
    return ['Sport', 'Fun'];
  }


}
