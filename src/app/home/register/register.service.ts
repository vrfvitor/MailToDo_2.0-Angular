import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewUser } from './new-user';

import { API_URL } from '../../contants';

@Injectable({ providedIn: 'root' })
export class RegisterService {

    API_URI=`${API_URL}/users`;

    constructor(private http: HttpClient) { }

    register(newUser: NewUser) {
        return this.http.post<NewUser>(API_URL, newUser);
    }

}