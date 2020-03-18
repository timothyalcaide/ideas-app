import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthDTO } from '@app/models/auth.model';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api: string = `${environment.api_server}/auth`

  constructor(private http: HttpClient) { }

  private auth(authType: string, data: AuthDTO) {
    return this.http.post(`${this.api}/${authType}`, data)
  }

  login(data: AuthDTO) {
    return this.auth('login', data)
  }

  register(data: AuthDTO) {
    return this.auth('register', data)
  }

  whoami() {
    return this.http.get(`${this.api}/whoami`, {
      headers: { autorization: `Bearer ${this.token}` }
    })
  }

  get token() {
    return localStorage.getItem('idea-token')
  }

  set token(val: string) {
    if (val) {
      localStorage.setItem('idea_token', val)
    } else {
      localStorage.clear()
    }
  }

}
