import { Injectable } from '@angular/core';
import{ InmoryDbService} from 'angular-in-memory-web-api';
import {Tweet} from './tweet';
import {Upvote} from '..upvote'

@Injectable({
  providedIn :'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const tweets : Tweet[] = [{
      id:0,
      name:'Corona',
      msg:'Muda Muda Muda!!!!!',
      date:new Date()
    }];
    const upvotes :Upvote[] = [{id:0,'corona':1}];
    return {tweets,upvotes}
  }
  constructor() { }

}