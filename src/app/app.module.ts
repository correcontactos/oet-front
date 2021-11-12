import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformComponent } from './inform/inform.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VehicleComponent } from './register/vehicle.component';
import { PersonComponent } from './register/person.component';
/*
import { LoginComponent } from './login/login.component';
import { PrivilegesComponent } from './privileges/privileges.component';
import { PrivilegesEditComponent } from './privileges/privileges.edit.component';
import { UsersComponent } from './users/users.component';
import { UsersEditComponent } from './users/users.edit.component';
*/

@NgModule({
  declarations: [
    AppComponent,
    InformComponent,
    HomeComponent,
    DashboardComponent,
    VehicleComponent,
    PersonComponent
    /*
    LoginComponent,
    PrivilegesComponent,
    PrivilegesEditComponent,
    UsersComponent,
    UsersEditComponent*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
