import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';



  // constructor(private http: HttpClient) {
  // }
  
  @Component({
    selector: 'app-employees',
    templateUrl: './employee.component.html',
    styleUrl: './employee.component.scss'
  })
  export class EmployeesComponent {
  
    employees: any = [];
  
    constructor(
      private http: HttpClient,
      private router: Router
    ) {
    }
  
    getEmployee() {
      this.http.get('http://localhost:3000/employees').subscribe({
        next: (res: any) => {
          console.log(res);
          this.employees = res.employees;
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
    findByIdAndDelete(id: any) {
    console.log(id)
      this.http.delete('http://localhost:3000/employees/' + id).subscribe({
        next: (res: any) => {
          this.getEmployee();
        },
        error: (err: any) => {
        },
      });
    }
  
    goToAddEmployee() {
      this.router.navigate(['/add-employee']);
    }
  }













//   getEmployees() {
//     this.http.get('http://localhost:3000/employees').subscribe({
//       next: (res: any) => {
//         console.log(res);

//         this.employees = res.employees;
//       },
//       error: (err) => {
//         console.log(err);
//       }
//     })
//   }

//   deleteEmployee(id: any) {
//     this.http.delete('http://localhost:3000/employees/' + id).subscribe({
//       next: (res: any) => {
//         this.getEmployees();
//       },
//       error: (err: any) => {
//       },
//     });
//   }
// }
