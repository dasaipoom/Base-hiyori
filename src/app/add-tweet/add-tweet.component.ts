import { Component, OnInit } from '@angular/core';
import { TweetService } from '../tweet.service';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-add-tweet',
  templateUrl: './add-tweet.component.html',
  styleUrls: ['./add-tweet.component.css']
})
export class AddTweetComponent implements OnInit {

  constructor(
    private tServ : TweetService,
    private route : Router,
    private fServ : FirebaseService,
    private afAuth : AngularFireAuth
  ) { }

  form = new FormGroup({
    msg : new FormControl(''),
  });
  name : string;

   ngOnInit() {
    this.afAuth.auth.onAuthStateChanged((user) => {
      if (user) {
        this.name = user.email;
      } else {
        this.name = undefined;
      }
    });
  }

  onSubmit() {
    this.fServ.addTweet(this.name,this.form.value.msg);
    this.route.navigate(['']);
  }

}