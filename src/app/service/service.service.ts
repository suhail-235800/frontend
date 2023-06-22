import { Doctor } from './../domain/Doctor';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private Httpclient: HttpClient) { }


  //admin-service
  getDoctors(): Observable<any>{
    return this.Httpclient.get<Doctor[]>(`http://localhost:8000/api/v1/admin`);
  }

  addDoctor(doctor:Doctor):Observable<any>{
    const url = `http://localhost:8000/api/v1/admin`;
    return this.Httpclient.post(url,doctor);
  }
  updateDoctor(doctorId:number,doctor:Doctor):Observable<any>{
    const url = `http://localhost:8000/api/v1/admin/id/${doctorId}`;
    return this.Httpclient.put(url, doctor);
  }
  deleteDoctor(doctorId: number) {
    return this.Httpclient.delete(`http://localhost:8000/api/v1/admin/${doctorId}`);
  }

  getDoctorBySpecialization(doctorSpecialization:string){
    return this.Httpclient.get(`http://localhost:8000/api/v1/admin/specializations/${doctorSpecialization}`);
  }
  getDoctorByName(doctorName:string){
    return this.Httpclient.get(`http://localhost:8000/api/v1/admin/doctorname/${doctorName}`);
  }
  getDoctorByLocation(doctorLocation:string){
    return this.Httpclient.get(`http://localhost:8000/api/v1/admin/doctorlocation/${doctorLocation}`);
  }
  getDoctorByNameandSpec(doctorName:string,doctorSpecialization:string){
    return this.Httpclient.get(`http://localhost:8000/api/v1/admin/searchnamespec/${doctorName}/${doctorSpecialization}`);
  }
  getDoctorByNameandLoc(doctorName:string,doctorLocation:string){
    return this.Httpclient.get(`http://localhost:8000/api/v1/admin/searchnameloc/${doctorName}/${doctorLocation}`);
  }
  getDoctorByLocandSpec(doctorLocation:string,doctorSpecialization:string){
    return this.Httpclient.get(`http://localhost:8000/api/v1/admin/searchlocspec/${doctorLocation}/${doctorSpecialization}`);
  }
  getDoctorByNameandLocandspec(doctorName:string,doctorLocation:string,doctorSpecialization:string){
    return this.Httpclient.get(`http://localhost:8000/api/v1/admin/searchnamelocspec/${doctorName}/${doctorLocation}/${doctorSpecialization}`);
  }

  //appointment-service


}
