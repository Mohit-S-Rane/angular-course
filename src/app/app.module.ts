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
import { LanguageComponent } from './components/resume-form/language/language.component';
import { LanguageFormComponent } from './components/resume-form/resume-dialogues/language-form/language-form.component';
import { LanguageListComponent } from './components/resume-form/resume-list/language-list/language-list.component';
import { LanguageCardComponent } from './components/resume-form/resume-card/language-card/language-card.component';
import { IndustrialExposureComponent } from './components/resume-form/industrial-exposure/industrial-exposure.component';
import { IndustrialExposureFormComponent } from './components/resume-form/resume-dialogues/industrial-exposure-form/industrial-exposure-form.component';
import { IndustrialExposureListComponent } from './components/resume-form/resume-list/industrial-exposure-list/industrial-exposure-list.component';
import { IndustrialExposureCardComponent } from './components/resume-form/resume-card/industrial-exposure-card/industrial-exposure-card.component';
import { ObjectiveComponent } from './components/resume-form/objective/objective.component';
import { ObjectiveFormComponent } from './components/resume-form/resume-dialogues/objective-form/objective-form.component';
import { ObjectiveListComponent } from './components/resume-form/resume-list/objective-list/objective-list.component';
import { ObjectiveCardComponent } from './components/resume-form/resume-card/objective-card/objective-card.component';
import { ReferenceComponent } from './components/resume-form/reference/reference.component';
import { ReferenceFormComponent } from './components/resume-form/resume-dialogues/reference-form/reference-form.component';
import { ReferenceListComponent } from './components/resume-form/resume-list/reference-list/reference-list.component';
import { ReferenceCardComponent } from './components/resume-form/resume-card/reference-card/reference-card.component';
import { ProjectDetailsComponent } from './components/resume-form/project-details/project-details.component';
import { ProjectDetailsFormComponent } from './components/resume-form/resume-dialogues/project-details-form/project-details-form.component';
import { ProjectDetailsListComponent } from './components/resume-form/resume-list/project-details-list/project-details-list.component';
import { ProjectDetailsCardComponent } from './components/resume-form/resume-card/project-details-card/project-details-card.component';
import { StrengthComponent } from './components/resume-form/strength/strength.component';
import { StrengthFormComponent } from './components/resume-form/resume-dialogues/strength-form/strength-form.component';
import { StrengthListComponent } from './components/resume-form/resume-list/strength-list/strength-list.component';
import { StrengthCardComponent } from './components/resume-form/resume-card/strength-card/strength-card.component';
import { WeaknessComponent } from './components/resume-form/weakness/weakness.component';
import { WeaknessFormComponent } from './components/resume-form/resume-dialogues/weakness-form/weakness-form.component';
import { WeaknessListComponent } from './components/resume-form/resume-list/weakness-list/weakness-list.component';
import { WeaknessCardComponent } from './components/resume-form/resume-card/weakness-card/weakness-card.component';
import { Truncate } from './pipes/truncate';

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
    SkillCardComponent,

    LanguageComponent,
    LanguageFormComponent,
    LanguageListComponent,
    LanguageCardComponent,

    IndustrialExposureComponent,
    IndustrialExposureFormComponent,
    IndustrialExposureListComponent,
    IndustrialExposureCardComponent,

    ObjectiveComponent,
    ObjectiveFormComponent,
    ObjectiveListComponent,
    ObjectiveCardComponent,

    ReferenceComponent,
    ReferenceFormComponent,
    ReferenceListComponent,
    ReferenceCardComponent,

    ProjectDetailsComponent,
    ProjectDetailsFormComponent,
    ProjectDetailsListComponent,
    ProjectDetailsCardComponent,

    StrengthComponent,
    StrengthFormComponent,
    StrengthListComponent,
    StrengthCardComponent,

    WeaknessComponent,
    WeaknessFormComponent,
    WeaknessListComponent,
    WeaknessCardComponent,

    Truncate

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
