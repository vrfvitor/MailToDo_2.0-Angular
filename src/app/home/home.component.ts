import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnDestroy, AfterViewInit {

    constructor() { }

    ngAfterViewInit(): void {
        document.querySelector('body').classList.add('home');
    }

    ngOnDestroy() {
        document.querySelector('body').classList.remove('home');
    }

}