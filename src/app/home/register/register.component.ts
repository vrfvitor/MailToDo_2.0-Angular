import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewUser } from './new-user';
import { RegisterService } from './register.service';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

    registerForm: FormGroup;
    hide: boolean = true;

    constructor(
        private fBuilder: FormBuilder,
        private registerService: RegisterService,
        private router: Router
    ) { }

    ngOnInit() {
        this.registerForm = this.fBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(5)]]
        })
    }

    register() {
        const newUser = this.registerForm.getRawValue() as NewUser;
        this.registerService.register(newUser).subscribe(() => {
            this.router.navigate([''], { queryParams: { registered: true } });
        }, e => Error(e));
    }

}