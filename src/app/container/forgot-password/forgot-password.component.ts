import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AlertService } from "src/app/services/alert-service";
import { ApiService } from "src/app/services/api-service";

@Component({
    selector: 'app-forgot-password',
    templateUrl: 'forgot-password.component.html',
    styleUrls: ['forgot-password.component.scss']
})

export class ForgotPasswordComponent {
    loading = false
    isEmailSend = false
    forgotPasswordForm: FormGroup
    constructor(private router: Router, private apiService: ApiService, private alertService: AlertService) {
        this.forgotPasswordForm = new FormGroup({
            email: new FormControl(null, !this.isEmailSend ? [Validators.required] : []),
            code: new FormControl(null, []),
            new_password: new FormControl(null, []),
            confirm_password: new FormControl(null, [])
        })
    }

    sendEmail() {
        this.loading = true
            this.loading = false
            this.isEmailSend = true
        // this.apiService.sendResetPasswordEmail(this.forgotPasswordForm.value).subscribe((data) => {
        //     console.log(data);
        //     this.loading = false
        //     this.isEmailSend = true
        //     this.alertService.success('Email has been send to email')
        //     this.forgotPasswordForm.get('code')?.setValidators([Validators.required])
        //     this.forgotPasswordForm.get('new_password')?.setValidators([Validators.required])
        //     this.forgotPasswordForm.get('confirm_password')?.setValidators([Validators.required])
        //     console.log('send email');
        // }, (error)=>{
        //     this.loading = false
        // }) 
    } 

    changePassword() {
        this.loading = true
        const observer$ = this.apiService.resetPassword(this.forgotPasswordForm.value)
        observer$.subscribe((data)=>{
            this.loading = false
            console.log(data);   
            this.router.navigate(['login'])
            this.alertService.success('Password Updated Successfully')
        }, error =>{
            this.loading = false
            console.log(error);
            
        })
    }

    backToLogin() {
        this.router.navigate(['login'])
    }
}