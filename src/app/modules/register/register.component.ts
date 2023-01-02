import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtService } from '../common/service/jwt.service';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerError = false;
  registerForm!: FormGroup;

  constructor(private registerService: RegisterService, private jwtService: JwtService, 
    private router: Router, private formBuilder: FormBuilder){

  }
  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      username: ['',[Validators.required,Validators.email]],
      password: ['',Validators.required],
      repeatPassword: ['',Validators.required]
    });
  }


   register(){
    if(this.registerForm.valid && this.isPasswordMatch(this.registerForm.value)){
      this.registerService.register(this.registerForm.value)
      .subscribe({
        next: response => {
          this.jwtService.setToken(response.token);
          this.router.navigate(["/profile"]);
        },
        error: err => {
            this.registerError = true;
        }
      
      });
    }
    
  }

  isPasswordMatch(register: any): boolean {
    if(register.password === register.repeatPassword){
        return true;
    } 
    this.registerError = true;
    return false;
}


}
