import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from '@core/user/user.service';

import { tap } from 'rxjs/operators';

const API_URL = "http://localhost:8080"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  authenticate(email: string, password: string) {
    return this.http.post(
      API_URL + '/users/login',
      { email, password },
      { observe: 'response' }) /* Access to Headers*/
      .pipe(tap(res => {
        const accessToken = res.headers.get('x-access-token');
        this.userService.storeLoggedUserToken(accessToken);
        console.log(`User with email '${email}' loged in with token '${accessToken}'`);
      }));
  }

}
