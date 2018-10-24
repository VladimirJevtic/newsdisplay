import {Category} from './category/category.model';
import {News} from './news/news.model';

export class NewsService {

  categories: Category[] = [
    new Category('Sport', [
      new News('Basketball', 'This is a Basketball text'),
      new News('Football', 'This is a Football text')
    ] ),
    new Category('Fun',  [
      new News('Game', 'This is a Game text'),
      new News('Show', 'This is a Show text')
    ])
  ];
  getCategories() {
    return this.categories.slice();
  }

  getNewsFromCategory(category: Category, newsId: number) {
    return category.newsArray[newsId];
  }
}
