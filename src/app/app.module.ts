import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InMemoryDataService } from './in-memory-data.service';
import { TweetService } from './tweet.service';
import { DisplayTweetComponent } from './display-tweet/display-tweet.component';
import { AddTweetComponent } from './add-tweet/add-tweet.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { TimelineComponent } from './timeline/timeline.component';
import {TimeAgoPipe} from 'time-ago-pipe';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireAuthModule } from "@angular/fire/auth";
import {AuthGuard} from './auth.guard';

import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from './environment';

import { UpvoteService } from './upvote.service';
import { UpvoteComponent } from './upvote/upvote.component';
import { DeleteComponent } from './delete/delete.component';
import { FirebaseService } from './firebase.service';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService ,{dataEncapsulation:false}) ,ReactiveFormsModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,AngularFireAuthModule,
    RouterModule.forRoot([
    { path: '', component: TimelineComponent },
    { path: 'tweet', component: AddTweetComponent,canActivate:[AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent }
    ]),
  ],

  
  declarations: [ AppComponent, HelloComponent, DisplayTweetComponent, AddTweetComponent, NavigationComponent, LoginComponent, TimelineComponent,TimeAgoPipe, UpvoteComponent, DeleteComponent, SignupComponent ],
  bootstrap:    [ AppComponent ],
  providers: [InMemoryDataService, TweetService, AuthService, UpvoteService,AngularFirestore, FirebaseService,AuthGuard]
})
export class AppModule { }
