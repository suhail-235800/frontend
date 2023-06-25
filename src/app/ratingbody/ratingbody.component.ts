import { Appointment } from './../domain/Appointment';
import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-ratingbody',
  templateUrl: './ratingbody.component.html',
  styleUrls: ['./ratingbody.component.css']
})
export class RatingbodyComponent {
  appointments: any;
  userId: number=0;
  doctorName: string='';
  appointment:Appointment = new Appointment();
  searchDoctorName: string;


  constructor(private service: ServiceService) { }

  ngOnInit(): void {

    this.service.getAppointmentByUserId(this.userId).subscribe(response => {
      console.log("1");
      this.appointments = response;
      for (let i = this.appointments.length; i >=0 ; i++) {
        this.appointment = new Appointment();
        this.appointment.userId = this.userId;
        this.appointment.appointmentId = this.appointments[i]['appointmentId'];
        this.appointment.doctorId =this.appointments[i]['doctorId'];
        this.appointment.doctorName = this.appointments[i]['doctorName'];
        this.appointment.doctorLocation = this.appointments[i]['doctorLocation'];
        this.appointment.doctorSpecialization = this.appointments[i]['doctorSpecialization']
        this.appointment.appointmentDate =this.appointments[i]['appointmentDate'];
        this.appointment.appointmentTime = this.appointments[i]['appointmentDate'];
        
      }
    });
  }

  searchDoctors() {
    this.service.getAppointmentByDoctorName(this.searchDoctorName).subscribe(response => {
      this.appointments = response;
      for (let i = this.appointments.length; i >=0 ; i++) {
        this.appointment = new Appointment();
        this.appointment.userId = this.userId;
        this.appointment.appointmentId = this.appointments[i]['appointmentId'];
        this.appointment.doctorId =this.appointments[i]['doctorId'];
        this.appointment.doctorName = this.appointments[i]['doctorName'];
        this.appointment.doctorLocation = this.appointments[i]['doctorLocation'];
        this.appointment.doctorSpecialization = this.appointments[i]['doctorSpecialization']
        this.appointment.appointmentDate =this.appointments[i]['appointmentDate'];
        this.appointment.appointmentTime = this.appointments[i]['appointmentDate'];
      }
    },
    error => {
      if (error.status === 404) {
        alert('No Doctors Found');
        window.location.reload();
      } else {
        // Handle other error cases here
      }
    });
  }
  
  show: boolean = false;
  selectedAppointmentIndex: number = -1;

  openpopup(index: number) {
    this.selectedAppointmentIndex = index;
    this.show = true;
  }

  closepopup() {
    this.selectedAppointmentIndex = -1;
    this.show = false;
  }

}
