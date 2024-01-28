import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeesComponent } from './employee/employee.component';
import { ResgisterComponent } from './resgister/resgister.component';
import { LoginComponent } from './login/login.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';


export const routes: Routes = [
    { path: '', redirectTo: 'employee', pathMatch: "full"},
    { path: 'employee', component: EmployeesComponent },
    { path: 'add-employee', component: AddEmployeeComponent},
    {path: 'resgister',component: ResgisterComponent},
    {path:'login',component: LoginComponent},
    {path:'edit-employee/:id',component:EditEmployeeComponent}

];


@NgModule({
    imports: [RouterModule.forRoot(routes),],
    exports: [RouterModule]
})
export class AppRoutingModule { }