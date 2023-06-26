import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../service/service.service';

import { Doctor } from '../domain/Doctor';
import { AppointmentRequest } from '../domain/AppointmentRequest';
import { Appointment } from '../domain/Appointment';

@Component({
  selector: 'app-userbody',
  templateUrl: './userbody.component.html',
  styleUrls: ['./userbody.component.css']
})
export class UserbodyComponent implements OnInit {
  searchQuery: string;
  searchDoctorName: string='';
  selectedSpecialization: string = 'default';
  selectedLocation: string = 'default';
  doctorName: string;
  doctorSpecialization: string;
  doctorLocation: string;
  doctorRating: string;
  doctor: Doctor = new Doctor();
  appointmentDate: string;
  appointmentTime: string;
  doctors: Doctor[] = [];
  requests:AppointmentRequest[]= [];
  appointment:Appointment = new Appointment();
  appointmentRequest:AppointmentRequest = new AppointmentRequest();
  appointments: Appointment[] = [];
  posts: any;
  strtime:string;
  selectedDate: string;
  selectedTime: string; // Declare 'posts' property

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.getDoctors().subscribe(response => {
      console.log("1");
      this.posts = response;
      for (let i = 0; i < this.posts.length; i++) {
        this.doctor = new Doctor();
        this.doctor.doctorId = this.posts[i]['doctorId'];
        this.doctor.doctorName = this.posts[i]['doctorName'];
        this.doctor.doctorSpecialization = this.posts[i]['doctorSpecialization'];
        this.doctor.doctorLocation = this.posts[i]['doctorLocation'];
        this.doctor.doctorRating = this.posts[i]['doctorRating'];
        this.doctors.push(this.doctor);
      }
    });
  }

  searchDoctors() {
    
    if (this.selectedLocation !== 'default' && this.selectedSpecialization !== 'default' && this.searchDoctorName===''){
      this.getDoctorsByLocandSpec(this.selectedLocation,this.selectedSpecialization);
    }

    else if(this.selectedLocation !== 'default' && this.selectedSpecialization === 'default' && this.searchDoctorName===''){
      this.getDoctorsByLocation(this.selectedLocation);
    }

    else if(this.selectedLocation === 'default' && this.selectedSpecialization === 'default' && this.searchDoctorName!==''){
      this.getDoctorsByName(this.searchDoctorName);
    }
    else if(this.selectedLocation === 'default' && this.selectedSpecialization !== 'default' && this.searchDoctorName===''){
      this.getDoctorsBySpecialization(this.selectedSpecialization);
    }
    else if(this.selectedLocation === 'default' && this.selectedSpecialization !== 'default' && this.searchDoctorName!==''){
      this.getDoctorsByNameandSpec(this.searchDoctorName,this.selectedSpecialization);
    }
    else if(this.selectedLocation !== 'default' && this.selectedSpecialization === 'default' && this.searchDoctorName!==''){
      this.getDoctorsByNameandLoc(this.searchDoctorName,this.selectedLocation);
    }
    else if (this.selectedLocation !== 'default' && this.selectedSpecialization !== 'default' && this.searchDoctorName!==' '){
      this.getDoctorsByNameLocSpec(this.searchDoctorName,this.selectedLocation, this.selectedSpecialization)
    }


  }
  
  
  
  

    // if (this.selectedSpecialization === 'default') {
    //   if(this.selectedLocation === 'default') {
    //     if(thi)
    //   }
    // }
    //   this.getDoctorsByName(this.searchQuery);
    // } else {
    //   this.getBySpecialization(this.selectedSpecialization);
    // }
  

// ...


getDoctorsByName(name: string) {
  this.service.getDoctorByName(name).subscribe(response => {
    this.posts = response;
    this.doctors = [];
    for (let i = 0; i < this.posts.length; i++) {
      this.doctor = new Doctor();
      this.doctor.doctorId = this.posts[i]['doctorId'];
      this.doctor.doctorName = this.posts[i]['doctorName'];
      this.doctor.doctorSpecialization = this.posts[i]['doctorSpecialization'];
      this.doctor.doctorLocation = this.posts[i]['doctorLocation'];
      this.doctor.doctorRating = this.posts[i]['doctorRating'];
      this.doctors.push(this.doctor);
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

getDoctorsByLocation(location: string) {
  this.service.getDoctorByLocation(location).subscribe(response => {
    console.log(response);
    // Clear the previous search results
    this.doctors = [];
    this.posts = response;
    for (let i = 0; i < this.posts.length; i++) {
      this.doctor = new Doctor();
      this.doctor.doctorId = this.posts[i]['doctorId'];
      this.doctor.doctorName = this.posts[i]['doctorName'];
      this.doctor.doctorSpecialization = this.posts[i]['doctorSpecialization'];
      this.doctor.doctorLocation = this.posts[i]['doctorLocation'];
      this.doctor.doctorRating = this.posts[i]['doctorRating'];
      this.doctors.push(this.doctor);
    }
  },
  error => {
    if (error.status === 404) {
      alert('No Doctors Found');
      window.location.reload();
    } else {
      // Handle other error cases here
    }
  }
  );

}
getDoctorsBySpecialization(specialization: string) {
  this.service.getDoctorBySpecialization(specialization).subscribe(response => {
    console.log(response);
    // Clear the previous search results
    this.doctors = [];
    this.posts = response;
    for (let i = 0; i < this.posts.length; i++) {
      this.doctor = new Doctor();
      this.doctor.doctorId = this.posts[i]['doctorId'];
      this.doctor.doctorName = this.posts[i]['doctorName'];
      this.doctor.doctorSpecialization = this.posts[i]['doctorSpecialization'];
      this.doctor.doctorLocation = this.posts[i]['doctorLocation'];
      this.doctor.doctorRating = this.posts[i]['doctorRating'];
      this.doctors.push(this.doctor);
    }
  }
  ,
  error => {
    if (error.status === 404) {
      alert('No Doctors Found');
      window.location.reload();
    } else {
      // Handle other error cases here
    }
  });

}
getDoctorsByNameandLoc(doctorname: string,location:string) {
  this.service.getDoctorByNameandLoc(doctorname,location).subscribe(response => {
    console.log(response);
    // Clear the previous search results
    this.doctors = [];
    this.posts = response;
    for (let i = 0; i < this.posts.length; i++) {
      this.doctor = new Doctor();
      this.doctor.doctorId = this.posts[i]['doctorId'];
      this.doctor.doctorName = this.posts[i]['doctorName'];
      this.doctor.doctorSpecialization = this.posts[i]['doctorSpecialization'];
      this.doctor.doctorLocation = this.posts[i]['doctorLocation'];
      this.doctor.doctorRating = this.posts[i]['doctorRating'];
      this.doctors.push(this.doctor);
    }
  }
  ,
  error => {
    if (error.status === 404) {
      alert('No Doctors Found');
      window.location.reload();
    } else {
      // Handle other error cases here
    }
  });

}
getDoctorsByNameandSpec(doctorname: string,specialization:string) {
  this.service.getDoctorByNameandSpec(doctorname,specialization).subscribe(response => {
    console.log(response);
    // Clear the previous search results
    this.doctors = [];
    this.posts = response;
    for (let i = 0; i < this.posts.length; i++) {
      this.doctor = new Doctor();
      this.doctor.doctorId = this.posts[i]['doctorId'];
      this.doctor.doctorName = this.posts[i]['doctorName'];
      this.doctor.doctorSpecialization = this.posts[i]['doctorSpecialization'];
      this.doctor.doctorLocation = this.posts[i]['doctorLocation'];
      this.doctor.doctorRating = this.posts[i]['doctorRating'];
      this.doctors.push(this.doctor);
    }
  }
  ,
  
  error => {
    if (error.status === 404) {
      alert('No Doctors Found');
      window.location.reload();
    } else {
      // Handle other error cases here
    }
  });

}
getDoctorsByLocandSpec(location:string,specialization: string){
  this.service.getDoctorByLocandSpec(location,specialization).subscribe(response => {
    console.log(response);
    // Clear the previous search results
    this.doctors = [];
    this.posts = response;
    for (let i = 0; i < this.posts.length; i++) {
      this.doctor = new Doctor();
      this.doctor.doctorId = this.posts[i]['doctorId'];
      this.doctor.doctorName = this.posts[i]['doctorName'];
      this.doctor.doctorSpecialization = this.posts[i]['doctorSpecialization'];
      this.doctor.doctorLocation = this.posts[i]['doctorLocation'];
      this.doctor.doctorRating = this.posts[i]['doctorRating'];
      this.doctors.push(this.doctor);
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
getDoctorsByNameLocSpec(doctorname:string,location:string,specialization: string) {
  this.service.getDoctorByNameandLocandspec(doctorname,location,specialization).subscribe(response => {
    console.log(response);
    // Clear the previous search results
    this.doctors = [];
    this.posts = response;
    for (let i = 0; i < this.posts.length; i++) {
      this.doctor = new Doctor();
      this.doctor.doctorId = this.posts[i]['doctorId'];
      this.doctor.doctorName = this.posts[i]['doctorName'];
      this.doctor.doctorSpecialization = this.posts[i]['doctorSpecialization'];
      this.doctor.doctorLocation = this.posts[i]['doctorLocation'];
      this.doctor.doctorRating = this.posts[i]['doctorRating'];
      this.doctors.push(this.doctor);
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


// Appointment Service
bookAppointment(doctor:Doctor,appointmentDate:string,appointmentTime:string){

  
  var dateObj = new Date(appointmentDate);
  var formattedDate = dateObj.toISOString().split('T')[0]; 
  // var appDate = new Date(formattedDate)

  // console.log(appDate);

  this.appointmentRequest = new AppointmentRequest();
  this.appointmentRequest.appointmentDate = formattedDate;
  this.appointmentRequest.appointmentTime = appointmentTime;
  this.appointmentRequest.doctorId=doctor.doctorId;
  console.log(this.appointmentRequest);



  // this.appointment = new Appointment();
  // this.appointment.appointmentId=0;
  // this.appointment.appointmentDate=this.appointmentDate;
  // this.appointment.appointmentTime=this.appointmentTime;
  // this.appointment.doctorId=this.doctor.doctorId;
  // this.appointment.doctorName=this.doctor.doctorName;
  // this.appointment.doctorLocation=this.doctor.doctorLocation;
  // this.appointment.doctorSpecialization=this.doctor.doctorSpecialization;
  // console.log(this.appointment);


  this.service.addAppointment(this.appointmentRequest)
  .subscribe(
    response => {
      // Handle the API response
      console.log('Appointment booked successfully!');
    },
    error => {
      console.error('Failed to book the appointment:', error);
    }
  );


}
// formatAppointmentDate(): string {
//   return this.datePipe.transform(this.appointmentDate, 'yyyy-MM-dd') || '';
// }

// formatAppointmentTime(): string {
//   return this.datePipe.transform(this.appointmentTime, 'HH:mm:ss') || '';
// }




}
