import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { News } from "src/app/shared/news/news.model";
import { HttpHeaders } from "@angular/common/http";

@Injectable()
export class MysqlService {
    constructor(private http: HttpClient) {

    }

    storeNews(news: News) {
        // const httpOptions = {
        //     headers: new HttpHeaders({
        //       'Content-Type':  'application/json',
        //       'Accept': 'application/json',
        //       'Access-Control-Allow-Credentials':true,
        //       'Access-Control-Allow-Origin':true
        //     //   'Authorization': 'my-auth-token'
        //     })
        //   };
        const data = {
            title: 'dsadasdasda',
            description: 'dasdasdasda',
            text: 'dasdasda',
            category: 'dasdasdasd',
            city: 'dasdasdasda',
            pathToPicture: 'dasdasda',
            active: 'dsadasda',
            stringData: new Date()
        }
        return this.http.post('http://localhost:8080/news/add', data);
    }

    getData(data) {
        return this.http.post('https://jsonplaceholder.typicode.com/posts', data);
    }

    getAll() {
        return this.http.get('http://localhost:8080/news/all');
    }
}