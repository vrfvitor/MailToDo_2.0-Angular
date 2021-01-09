import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@core/auth/auth-service.service';

@Component({
    selector: 'signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {

    loginForm: FormGroup;
    @ViewChild('inputEmail') inputEmail: ElementRef<HTMLInputElement>;
    hide: boolean = true;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router) { }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    login(): void {
        const email = this.loginForm.get('email').value;
        const password = this.loginForm.get('password').value;

        this.authService.authenticate(email, password)
            .subscribe(
                () => {
                    console.log('Autenticou');
                    this.router.navigate(['tasks']);
                }
                , err => {
                    console.log(err);
                    this.loginForm.reset();
                    this.inputEmail.nativeElement.focus();
                });
    }
}