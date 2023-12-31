import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './container/forgot-password/forgot-password.component';
import { LoginComponent } from './container/login/login.component';
import { SignupComponent } from './container/signup/signup.component';
import { VerificationComponent } from './container/verification/verification.component';
import { AnonGuard } from './guards/anon-guard';
import { AuthGuard } from './guards/auth-guard';
import { DashboardComponent } from './container/layout/dashboard/dashboard.component';
import { VerificationInCompleted } from './guards/verification-in-completed';
import { OnBoardingInComplete } from './guards/on-boarding-in-complete';
import { VerificationCompleted } from './guards/verification-completed';
import { OnBoardingComplete } from './guards/on-boarding-complete';
import { OnBoardingIntroComponent } from './container/on-boarding/on-boarding-intro/on-boarding-intro.component';
import { OnBoardingComponent } from './container/on-boarding/on-boarding/on-boarding.component';

// const routes: Routes = [{path: 'login', component: LoginComponent, canActivate: [AnonGuard]},
// {path: 'signup', component: SignupComponent, canActivate: [AnonGuard]},
// {path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [AnonGuard]},
// {path: 'verify', component: VerificationComponent, canActivate: [AuthGuard]}];

const routes: Routes = [
  {
    path: '',
    canActivate: [AnonGuard],
    children: [
      { path: 'signup', component: SignupComponent },
      { path: '', component: LoginComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
    ],
  },
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: 'verify', component: VerificationComponent, canActivate: [VerificationInCompleted] },
      { path: 'on-boarding', component: OnBoardingIntroComponent, canActivate: [VerificationCompleted, OnBoardingInComplete]},
      { path: 'on-boarding/add', component: OnBoardingComponent, canActivate: [VerificationCompleted, OnBoardingInComplete]},
      { path: 'dashboard', component: DashboardComponent, canActivate: [VerificationCompleted, OnBoardingComplete]}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
