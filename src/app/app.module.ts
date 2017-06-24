import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import 'hammerjs';

import { AppComponent } from './app.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthService} from './services/authentication/AuthService';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule, MdButtonModule, MdCheckboxModule} from '@angular/material';
import {MainPageComponent} from './components/main-page/mainpage.component';
import {NgNotifyPopup, NotificationService} from 'ng2-notify-popup';
import {RegistrationService} from './services/registration/RegistrationService';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MaterialModule,
    NgNotifyPopup
  ],
  providers: [
    AuthService,
    NotificationService,
    RegistrationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
