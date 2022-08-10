import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  apiUrl:string = "https://www.reddit.com/r/aww/.json";
  constructor(private http:HttpClient) { }

  GetApiCall():any{
    return this.http.get(this.apiUrl);
  }
}
