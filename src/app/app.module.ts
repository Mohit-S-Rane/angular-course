import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http-service';
import { ApiService, TEST_TOKEN } from './services/api-service';
import { AlertService } from './services/alert-service';
import { LoginComponent } from './container/login/login.component';
import { SignupComponent } from './container/signup/signup.component';
import { ForgotPasswordComponent } from './container/forgot-password/forgot-password.component';
import { VerificationComponent } from './container/verification/verification.component';
import { AuthGuard } from './guards/auth-guard';
import { AnonGuard } from './guards/anon-guard';
import { OnBoardingComponent } from './container/on-boarding/on-boarding/on-boarding.component';
import { DashboardComponent } from './container/layout/dashboard/dashboard.component';
import { VerificationCompleted } from './guards/verification-completed';
import { VerificationInCompleted } from './guards/verification-in-completed';
import { OnBoardingComplete } from './guards/on-boarding-complete';
import { OnBoardingIntroComponent } from './container/on-boarding/on-boarding-intro/on-boarding-intro.component';
import { OnBoardingInComplete } from './guards/on-boarding-in-complete';
import { ResumeNameComponent } from './container/on-boarding/resume-name/resume-name.component';
import { UploadComponent } from './container/on-boarding/tabs/upload/upload.componet';
import { ResumeFormComponent } from './container/resume-form/resume-form.component';
import { ContactDetailsComponent } from './components/resume-form/contact-details/contact-details.component';
import { ContactDetailFormComponent } from './components/resume-form/resume-dialogues/contact-detail-form/contact-detail-form.component';
import { EducationComponent } from './components/resume-form/education/education.component';
import { EducationFormComponent } from './components/resume-form/resume-dialogues/education-form/education-form.component';
import { EducationListComponent } from './components/resume-form/resume-list/education-list/education-list.component';
import { EducationCardComponent } from './components/resume-form/resume-card/education-card/education-card.component';
import { EmploymentHistoryComponent } from './components/resume-form/employment-history/employment-history.component';
import { EmploymentHistoryListComponent } from './components/resume-form/resume-list/employment-history-list/employment-history-list.component';
import { EmploymentHistoryCardComponent } from './components/resume-form/resume-card/employment-history-card/employment-history-card.component';
import { EmploymentHistoryFormComponent } from './components/resume-form/resume-dialogues/employment-history-form/employment-history-form.component';
import { AwardComponent } from './components/resume-form/award/awards-achivement.component';
import { AwardFormComponent } from './components/resume-form/resume-dialogues/award-form/award-form.component';
import { AwardListComponent } from './components/resume-form/resume-list/award-list/award-list.component';
import { AwardCardComponent } from './components/resume-form/resume-card/award-card/award-card.component';
import { InterestComponent } from './components/resume-form/interest/interest.component';
import { InterestFormComponent } from './components/resume-form/resume-dialogues/interest-form/interest-form.component';
import { InterestListComponent } from './components/resume-form/resume-list/interest-list/interest-list.component';
import { InterestCardComponent } from './components/resume-form/resume-card/interest-card/interest-card.component';
import { SkillsComponent } from './components/resume-form/skills/skills.component';
import { SkillFormComponent } from './components/resume-form/resume-dialogues/skill-form/skill-form.component';
import { SkillListComponent } from './components/resume-form/resume-list/skill-list/skill-list.component';
import { SkillCardComponent } from './components/resume-form/resume-card/skill-card/skill-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    VerificationComponent,
    OnBoardingComponent,
    OnBoardingIntroComponent,
    DashboardComponent,
    ResumeNameComponent,
    UploadComponent,
    ResumeFormComponent,
    ContactDetailsComponent,
    ContactDetailFormComponent,

    EducationComponent,
    EducationFormComponent,
    EducationListComponent,
    EducationCardComponent,

    EmploymentHistoryComponent,
    EmploymentHistoryFormComponent,
    EmploymentHistoryListComponent,
    EmploymentHistoryCardComponent,

    AwardComponent,
    AwardFormComponent,
    AwardListComponent,
    AwardCardComponent,

    InterestComponent,
    InterestFormComponent,
    InterestListComponent,
    InterestCardComponent,

    SkillsComponent,
    SkillFormComponent,
    SkillListComponent,
    SkillCardComponent

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
    OnBoardingInComplete,
    // {provide: TEST_TOKEN, useValue: 'hello test token'},
    // useFactory return arrow fuction
    {provide: TEST_TOKEN, useFactory: () => 'hello factory test'},  
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
