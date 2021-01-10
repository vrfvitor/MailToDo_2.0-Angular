import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@core/auth/auth-service.service';
import { MessagesService } from '@core/messages.service';

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
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private messagesService: MessagesService,
    ) { }

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe(params =>
            params.registered && this.messagesService.showMessage('User registered successfully')
        );

        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    login(): void {
        console.log('login');
        
        const email = this.loginForm.get('email').value;
        const password = this.loginForm.get('password').value;

        this.authService.authenticate(email, password)
            .subscribe(
                () => {
                    this.router.navigate(['tasks'], { queryParams: { signedIn: true } });
                }
                , () => {
                    this.messagesService.showMessage('You have entered an invalid username or password')
                    this.loginForm.reset();
                    this.inputEmail.nativeElement.focus();
                });
    }
}