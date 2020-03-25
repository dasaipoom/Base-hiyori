import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import {Upvote} from './upvote';


const httpOptions = {
 headers: new HttpHeaders({
 'Content-Type': 'application/json',
 'Authorization': 'my-auth-token'
 })
};


@Injectable()
export class UpvoteService {

  constructor(
    private http : HttpClient
  ) { }

  private upvoteUrl = 'api/upvotes';

  getVote(id:number) :Observable<Upvote> {
    return this.http.get<Upvote>(this.upvoteUrl+'/'+id);
  }
  updateVote(upvote:Upvote){
    return this.http.post<Upvote>(this.upvoteUrl,upvote,httpOptions);
  }
}