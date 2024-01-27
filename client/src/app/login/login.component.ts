import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './Login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  User:any=[];

  newUser ={
    emailId: '',
    Password: '',
  }
  login(){
    this.http.post('http://localhost:3000/user/login', this.newUser).subscribe({
      next: (res: any) => {
        console.log(res);
        this.newUser.emailId='';
        this.newUser.Password='';
        
      },
      error: (error: any) => {

      }
    })
  }

  constructor(
    private http:HttpClient,
    private router: Router
  ) {}

  

gotoResgister(){
  this.router.navigate(['/resgister']);
}
}