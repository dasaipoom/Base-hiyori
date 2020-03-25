import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { firestore } from 'firebase/app';

@Injectable({
providedIn:'root'
})
export class FirebaseService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  getTweets() {
    return this.firestore.collection('tweets').snapshotChanges();
  }

  addTweet(val1 : string, val2 : string) {
    let tweet = {
      name: val1,
      msg: val2,
      date: firebase.firestore.Timestamp.now(),
    };
    return this.firestore.collection('tweets').add(tweet);
  }

  deleteTweet(id : string) {
    return this.firestore.collection('tweets').doc(id).delete();
  }

  addVote(id : string, name: string) {
    return this.firestore.collection('tweets').doc(id).update({
      voters: firestore.FieldValue.arrayUnion(name)
    })
  }

  delVote(id : string, name: string) {
    return this.firestore.collection('tweets').doc(id).update({
      voters: firestore.FieldValue.arrayRemove(name)
    })
  }
}