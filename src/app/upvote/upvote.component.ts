import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { FirebaseService } from '../firebase.service';
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
selector: 'app-upvote',
templateUrl: './upvote.component.html',
styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {
  constructor(
    private auth : AuthService,
    private fServ : FirebaseService,
    private afAuth : AngularFireAuth
  ) { }

  isLoggedIn;
  name;

  ngOnInit() {
    this.afAuth.auth.onAuthStateChanged((user) => {
      if (user) {
        this.isLoggedIn = true
        this.name = user.email;
      } else {
      this.isLoggedIn = false
      }
    });
  }

  @Input() voters: string[];
  @Input() twId: string;

  get voteCount() {
    if (this.voters)
      return this.voters.length;
    else return 0
  }

  get voted() {
    if (this.voters)
      return this.voters.includes(this.name);
    else return false
  }

  del() {
    this.fServ.delVote(this.twId, this.name)
  }

  add() {
    this.fServ.addVote(this.twId, this.name)
  }

}

  

  

