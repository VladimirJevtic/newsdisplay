import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from 'src/app/shared/news/news.model';

@Injectable()
export class MysqlService {
    constructor(private http: HttpClient) {

    }

    storeNews(news: News) {
        return this.http.post(
            `http://localhost:8080/news/add?title=${news.title}
            &description=${news.description}
            &text=${news.text}
            &stringDate=${news.date}
            &category=${news.category}
            &city=${news.city}
            &pathToPicture=${news.pathToPicture}`,news,
            { responseType: 'text' });
    }

    updateNews(news: News) {
        return this.http.put(`http://localhost:8080/news/update?title=${news.title}
        &description=${news.description}
        &text=${news.text}
        &stringDate=${news.date}
        &category=${news.category}
        &city=${news.city}
        &pathToPicture=${news.pathToPicture}`,news,
        { responseType: 'text' });
    }

    getNewsById(id: string) {
        return this.http.get(`http://localhost:8080/news/id?id=${id}`);
    }

    getAll() {
        return this.http.get('http://localhost:8080/news/all');
    }

    getCities() {
        return this.http.get('http://localhost:8080/news/cities');
    }

    getCategoriesByCity(city: string) {
        return this.http.get(`http://localhost:8080/news/categoriesByCity?city=${city}`);
    }

    getNewsByCategory(category: string) {
        return this.http.get(`http://localhost:8080/news/byCategory?category=${category}`);
    }

    getNewsByCityAndCategory(city: string, category: string) {
        return this.http.get(`http://localhost:8080/news/cityAndCategory?city=${city}&category=${category}`);
    }

    getNewsByTitle(title: string) {
        return this.http.get(`http://localhost:8080/news/title?title=${title}`);
    }

    removeNews(id: string) {
        return this.http.delete(`http://localhost:8080/news/delete?id=${id}`);
    }
}
