import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { Tweet } from '../../tweet';
import { TweetService } from '../tweet.service'
import { FirebaseService } from '../firebase.service';
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  @Input() delTwId: number;
  @Input() delTwUsn: string
  @Input() handleDel
  isMe: boolean = false;

  constructor(
    private auth : AuthService,
    private twS: TweetService,
    private fServ : FirebaseService,
    private afAuth : AngularFireAuth
  ) { }

  ngOnInit() {
    this.afAuth.auth.onAuthStateChanged((user) => {
if (user) {
  this.isMe = user.email === this.delTwUsn;
} else {
  this.isMe = false
}
});
  }

  deleteTw() {
    this.fServ.deleteTweet(this.delTwId).subscribe();
  }

}