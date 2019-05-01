import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Topic } from '../model/topic';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TopicService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8090/';
  }


  public findAll(mode: any): Observable<Topic[]> {
     return this.http.get<Topic[]>(this.usersUrl + mode);
  }

}

