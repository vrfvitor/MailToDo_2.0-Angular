import { Injectable } from '@angular/core';
import { TokenService } from '@core/token/token.service';

import * as jwt_decode from 'jwt-decode';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from './user';

@Injectable({ providedIn: 'root' })
export class UserService {

    // Using BehaviorSubject so the last data notifiyed is kept until someone gets it
    userSubject = new BehaviorSubject<User>(null);

    constructor(private tokenService: TokenService) {
        this.tokenService.hasToken &&
            this.decodeAndNotify()
    }

    /**
     * Whenever user logs in the app, this method will be called
     * then user token is stored and its data is shared to subscribers
     * @param token to be stored
     */
    storeLoggedUserToken(token: string): void {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    /**
     * Provides a User observer so those who want/beed user info to get
     * it via subscribe
     */
    getUser(): Observable<User> {
        return this.userSubject.asObservable();
    }

    /**
     * Access the authToken and extract it's payload with the User infos
     * and then notify the subscribers
     */
    decodeAndNotify() {
        const token = this.tokenService.getToken();
        try {
            const user = JSON.parse(jwt_decode(token).sub) as User;
            this.userSubject.next(user);
        } catch (e) {
            console.log(e);
        }
    }

    logout() {
        this.tokenService.removeToken();
        this.userSubject.next(null);
    }

}   