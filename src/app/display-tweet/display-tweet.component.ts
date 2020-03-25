import { Component, OnInit, Input } from '@angular/core';
import { Tweet } from '../tweet';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-display-tweet',
  templateUrl: './display-tweet.component.html',
  styleUrls: ['./display-tweet.component.css']
})
export class DisplayTweetComponent implements OnInit {

  constructor( 
    private auth : AuthService
  ) { }

  @Input() tweet : Tweet;
  isLoggedIn;
  name;

  ngOnInit() {
    
  }

}