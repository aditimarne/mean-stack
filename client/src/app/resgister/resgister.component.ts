import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resgister',
  templateUrl: './resgister.component.html',
  styleUrl: './resgister.component.scss'
})
export class ResgisterComponent {
  newUser ={
    emailId: '',
    Password: '',
  }
  constructor(
    private http:HttpClient,
    private router: Router
  ) {}

  Resgister() {
    this.http.post('http://localhost:3000/user/resgister', this.newUser).subscribe({
      next: (res: any) => {
        console.log(res);
        this.newUser.emailId='';
        this.newUser.Password='';
        
      },
      error: (error: any) => {

      }
    })
  }
  gotoLogin(){
    this.router.navigate(['/login']);
  }
}
