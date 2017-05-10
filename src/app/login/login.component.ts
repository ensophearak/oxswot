import { Component,OnInit } from '@angular/core';
import  {FormBuilder,FormGroup,Validators,AbstractControl} from '@angular/forms';
import { Router } from "@angular/router";
import { MdSnackBar } from '@angular/material';
import  {AuthService} from '../auth/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit  {
form:FormGroup;
email:AbstractControl;
errorMessage:string;
password:AbstractControl;

  constructor(public fb:FormBuilder
  ,public auth:AuthService
  ,public router: Router) {
  }
  ngOnInit(){
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }
  onLogin(){
    var self=this;
    if(this.form.valid){
      this.auth.login(this.email.value,this.password.value).then(function(snapshot){
        if(snapshot){
          self.router.navigate(['']);
        }
      }).catch(function(error){
        self.errorMessage = error.message;
      });
    }
  }

}
