import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { UsersComponent } from "./user/user.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [
        AppComponent,
        UsersComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule, 
        FormsModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}