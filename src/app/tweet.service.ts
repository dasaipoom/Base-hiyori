import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Tweet} from './tweet';

const httpOptions = {
 headers: new HttpHeaders({
 'Content-Type': 'application/json',
 'Authorization': 'my-auth-token'
 })
};

@Injectable()
export class TweetService {

  constructor(
    private http:HttpClient,
  ) { }

  private tweetUrl = 'api/tweets'
  private id = 1;
  getTweets() : Observable<Tweet[]>{
    return this.http.get<Tweet[]>(this.tweetUrl);
  }

  addTweet(val1: string,val2:string) : Observable<Tweet>{
    let tweet :Tweet={
      id:this.id,
      name:val1,
      msg:val2,
      date:new Date()
    };
    this.id++;
    return this.http.post<Tweet>(this.tweetUrl,tweet,httpOptions);
  }
    
  deleteTweet(id) {
    const url = `${this.tweetUrl}/${id}`
    return this.http.delete(url,httpOptions);
  }
}