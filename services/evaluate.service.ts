import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Question} from "../model/question";


@Injectable({
  providedIn: 'root'
})
export class EvaluateService {


  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8090/result/';
  }

  public getResult(userData: any): Observable<any> {
   return this.http.post(this.usersUrl, userData);
  }

   public findAll(): Observable<Question[]> {
      this.usersUrl = this.usersUrl + 'questions/';
      return this.http.get<Question[]>(this.usersUrl);
   }
}
