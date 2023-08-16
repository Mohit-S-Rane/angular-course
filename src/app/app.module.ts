import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VideoComponent } from './components/video/video.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http-service';
import { ApiService } from './services/api-service';
import { AlertService } from './services/alert-service';
import { LoginComponent } from './container/login/login.component';
import { SignupComponent } from './container/signup/signup.component';
import { ForgotPasswordComponent } from './container/forgot-password/forgot-password.component';
import { VerificationComponent } from './container/verification/verification.component';
import { AuthGuard } from './guards/auth-guard';
import { AnonGuard } from './guards/anon-guard';
import { OnBoardingComponent } from './container/on-boarding/on-boarding.component';
import { DashboardComponent } from './container/layout/dashboard/dashboard.component';
import { VerificationCompleted } from './guards/verification-completed';
import { VerificationInCompleted } from './guards/verification-in-completed';
import { OnBoardingComplete } from './guards/on-boarding-complete';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    VerificationComponent,
    OnBoardingComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
  providers: [
    HttpService,
    ApiService,
    AlertService,
    AuthGuard,
    AnonGuard,
    VerificationCompleted,
    VerificationInCompleted,
    OnBoardingComplete,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
