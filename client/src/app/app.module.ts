import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AddEmployeeComponent } from "./add-employee/add-employee.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeesComponent } from "./employee/employee.component";
import { LoginComponent } from "./login/login.component";
import { ResgisterComponent } from "./resgister/resgister.component";
@NgModule({
    declarations: [
        AppComponent,
        EmployeesComponent,
        AddEmployeeComponent,
        LoginComponent,
        ResgisterComponent,
        EditEmployeeComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule, 
        FormsModule,
        ReactiveFormsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}