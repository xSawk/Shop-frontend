import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtService } from '../common/service/jwt.service';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

 
  loginForm!: FormGroup;
  loginError = false;
 

  constructor(private formBuilder: FormBuilder,private loginService: LoginService,private jwtService: JwtService,
    private router: Router){

  }


  ngOnInit(): void {
    if(this.jwtService.isLoggedIn()){
       this.router.navigate(["/profile"]);
    }


    this.loginForm = this.formBuilder.group({
      username: ['',[Validators.required,Validators.email]],
      password: ['',Validators.required]
  });


  }


  login(){
    if(this.loginForm.valid){
      this.loginService.login(this.loginForm.value)
      .subscribe({
        next: response => {
          this.jwtService.setToken(response.token);
          this.router.navigate(["/profile"]);
          this.loginError = false;

        },

        error: err => {
            this.loginError = true;
        }
      });
    }

  }





}



