import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { AuthService } from "../auth.service";
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private route: Router,
    private form: FormBuilder,
    private auth: AuthService,
    private afAuth: AngularFireAuth
  ) {}

  ngOnInit() {
    this.loginForm = this.form.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  login() {
    this.afAuth.auth
      .signInWithEmailAndPassword(this.f.email.value, this.f.password.value)
      .then(_ => {
        alert("Logged in");
        this.route.navigate([""]);
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode + "\n" + errorMessage);

      });
  }
}
