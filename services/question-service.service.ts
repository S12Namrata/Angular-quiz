import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../model/question';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8090/';
  }

  public findAll(): Observable<Question[]> {
    this.usersUrl = this.usersUrl + 'questions/';
    return this.http.get<Question[]>(this.usersUrl);
  }

  public save(ques: Question) {
    return this.http.post<Question>(this.usersUrl, ques);
  }

  public getQuizBasedOnTopic(topicId: string): Observable<Question[]> {
    let urlQuiz = this.usersUrl + 'random/' + topicId;
    return this.http.get<Question[]>(urlQuiz);
  }
}
