import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Quiz } from '../models/quiz';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private httpClient: HttpClient) { }

  // post(quiz: Quiz): Observable<Quiz> {
  //   return this.httpClient.post<Quiz>('http://localhost:8888/add', quiz);
  // }
  post(Quiz: Quiz): Observable<object> {
    return this.httpClient.post('http://localhost:8888/add', Quiz);
  }

  get(): Observable<Quiz> {
    return this.httpClient.get<Quiz>('http://localhost:8888/quiz');
  }
  
}

