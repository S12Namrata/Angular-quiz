import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Quiz} from '../model/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
   private usersUrl: string;

   constructor(private http: HttpClient) {
      this.usersUrl = 'http://localhost:8090/quiz/';
   }

 /*  public findAll(): Observable<Quiz[]> {
      return this.http.get<Quiz[]>(this.usersUrl);
   }*/

   public findAll(quizId: any): Observable<Quiz[]> {
      let urlToUse = this.usersUrl;
      if (quizId) {
         urlToUse = this.usersUrl + quizId;
      }
      console.log('URL USING : ', urlToUse)
      return this.http.get<Quiz[]>(urlToUse);
   }

   public save(quiz: any) {
      return this.http.post<Quiz>(this.usersUrl,quiz);
   }

   public deleteQuiz(quizId: any) {
      return this.http.delete(this.usersUrl + quizId);
   }

}
