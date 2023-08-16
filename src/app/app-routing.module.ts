import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './container/forgot-password/forgot-password.component';
import { LoginComponent } from './container/login/login.component';
import { SignupComponent } from './container/signup/signup.component';
import { VerificationComponent } from './container/verification/verification.component';
import { AnonGuard } from './guards/anon-guard';
import { AuthGuard } from './guards/auth-guard';
import { OnBoardingComponent } from './container/on-boarding/on-boarding.component';

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
      { path: 'verify', component: VerificationComponent },
      { path: 'on-boarding', component: OnBoardingComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
