import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from '@core/user/user.service';
import { API_URL } from 'app/contants';

import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URI = `${API_URL}/auth`;

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  authenticate(email: string, password: string) {
    return this.http.post(
      this.API_URI,
      { email, password },
      { observe: 'response' }) /* Access to Headers*/
      .pipe(tap(res => {
        const accessToken = res.headers.get('x-access-token');
        this.userService.storeLoggedUserToken(accessToken);
      }));
  }

}
