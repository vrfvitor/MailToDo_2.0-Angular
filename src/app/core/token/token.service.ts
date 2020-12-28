import { Injectable } from '@angular/core';

const KEY = 'authToken';

@Injectable({ providedIn: 'root' })
export class TokenService {
    constructor() { }

    hasToken() {
        return !!this.getToken();
    }

    getToken() {
        return window.localStorage.getItem(KEY);
    }

    setToken(token: string) {
        return window.localStorage.setItem(KEY, token);
    }

    removeToken() {
        return window.localStorage.removeItem(KEY);
    }

}