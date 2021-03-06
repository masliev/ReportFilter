import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { DatepickerService } from './services/datepicker.service';
import { RegisterComponent } from './components/register/register.component';
import { StatusComponent } from './components/status/status.component';
import { EnsureAuthenticated } from './services/ensure-authenticated.service';
import { LoginRedirect } from './services/login-redirect.service';
import { LogoutComponent } from './components/logout/logout.component';
import { HomeComponent } from './components/home/home.component';
import { MyDateRangePickerModule } from 'mydaterangepicker';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    StatusComponent,
    LogoutComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MyDateRangePickerModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
        canActivate: [EnsureAuthenticated]
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [LoginRedirect]
      },
      {
        path: 'logout',
        component: LogoutComponent,
        canActivate: [EnsureAuthenticated]
      },
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [LoginRedirect]
      },
      {
        path: 'status',
        component: StatusComponent,
        canActivate: [EnsureAuthenticated]
      }
    ])
  ],
  providers: [
    AuthService,
    EnsureAuthenticated,
    LoginRedirect,
    DatepickerService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
