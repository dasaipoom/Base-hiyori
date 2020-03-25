import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private route : Router,
    private afAuth : AngularFireAuth
  ) { }

  form = new FormGroup({
    email : new FormControl(''),
    pwd : new FormControl('')
  });

  ngOnInit() {
  }

  onSubmit() {
    this.afAuth.auth.createUserWithEmailAndPassword(
      this.form.value.email,this.form.value.pwd
      ).catch(function(error) {
        window.alert(error.message);
        });
    this.route.navigate(['login']);
  }

}