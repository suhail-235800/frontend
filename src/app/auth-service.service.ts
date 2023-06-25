import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authTokenKey = 'authToken';
  private apiUrl = 'YOUR_API_URL';

  constructor(private http: HttpClient) {}

 
  storeToken(token: string): void {
    sessionStorage.setItem(this.authTokenKey, token);
  }


  getToken(): string | null {
    return sessionStorage.getItem(this.authTokenKey);
  }

 
  attachTokenToRequest(): HttpHeaders {
    const token = this.getToken();
    if (token) {
      return new HttpHeaders().set('Authorization', `Bearer ${token}`);
    } else {
      return new HttpHeaders();
    }
  }

  getSecuredData(): Observable<any> {
    const headers = this.attachTokenToRequest();
    return this.http.get(`${this.apiUrl}/secured-endpoint`, { headers });
  }
}
