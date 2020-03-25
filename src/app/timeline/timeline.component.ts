import { Component, OnInit } from '@angular/core';
import { Tweet } from '../tweet';
import { TweetService } from '../tweet.service';
import { FirebaseService } from '../firebase.service';

@Component({
selector: 'app-timeline',
templateUrl: './timeline.component.html',
styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  constructor(
    private fServ : FirebaseService
  ) { }

  tweets : Tweet[];

  ngOnInit() {
    this.fServ.getTweets().subscribe(val => {
      this.tweets = val.map( e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Tweet
      })
      console.log(this.tweets)
    });
  }
}