import { Doctor } from './../domain/Doctor';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private Httpclient: HttpClient) { }

  getDoctors(): Observable<any>{
    return this.Httpclient.get<Doctor[]>(`http://localhost:8000/api/v1/admin`);
  }

  addDoctor(doctor:Doctor):Observable<any>{
    const url = `http://localhost:8000/api/v1/admin`;
    return this.Httpclient.post(url,doctor);
  }
}
