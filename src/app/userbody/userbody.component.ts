import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../service/service.service';
import { Doctor } from '../domain/Doctor';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

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
  posts: any; // Declare 'posts' property

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
    if (this.selectedLocation !== 'default') {
      if (this.selectedSpecialization !== 'default') {
        if (this.searchDoctorName !== '') {
          this.getDoctorsByNameLocSpec(this.searchDoctorName, this.selectedLocation, this.selectedSpecialization);
        } else {
          this.getDoctorsByLocandSpec(this.selectedLocation, this.selectedSpecialization);
        }
      } else {
        if (this.searchDoctorName !== '') {
          this.getDoctorsByNameandLoc(this.searchDoctorName, this.selectedLocation);
        } else {
          this.getDoctorsByLocation(this.selectedLocation);
        }
      }
    } else if (this.selectedSpecialization !== 'default') {
      if (this.searchDoctorName !== '') {
        this.getDoctorsByNameandSpec(this.searchDoctorName, this.selectedSpecialization);
      } else {
        this.getDoctorsBySpecialization(this.selectedSpecialization);
      }
    } else if (this.searchDoctorName !== '') {
      this.getDoctorsByName(this.searchDoctorName);
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

getDoctorsByLocation(specialization: string) {
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

// ...
bookAppointment() {
  throw new Error('Function not implemented.');
}
}

