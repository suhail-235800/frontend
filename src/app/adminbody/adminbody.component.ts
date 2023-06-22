import { Component } from '@angular/core';
import { ServiceService } from './../service/service.service';
import { Doctor } from '../domain/Doctor';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-adminbody',
  templateUrl: './adminbody.component.html',
  styleUrls: ['./adminbody.component.css']
})
export class AdminbodyComponent {

  doctors: Doctor[];
  posts: any;
  doctor: Doctor = new Doctor();
  newDoctor: Doctor = new Doctor();
  isEditing: { [key: string]: boolean } = {};

  adminForm: FormGroup;

  constructor(private service: ServiceService) {
    this.doctors = [];
    this.adminForm = new FormGroup({
      doctorName: new FormControl(),
      doctorSpecialization: new FormControl(),
      doctorLocation: new FormControl()
    });
  }

  ngOnInit(): void {
    this.service.getDoctors().subscribe(response => {
      this.posts = response;
      for (let i = 0; i < this.posts.length; i++) {
        this.doctor = new Doctor();
        this.doctor.doctorId = this.posts[i]['doctorId'];
        this.doctor.doctorName = this.posts[i]['doctorName'];
        this.doctor.doctorSpecialization = this.posts[i]['doctorSpecialization'];
        this.doctor.doctorLocation = this.posts[i]['doctorLocation'];
        this.doctor.doctorRating = this.posts[i]['doctorRating'];
        this.doctors.push(this.doctor);
        console.log(this.doctors);
      }
    });
  }


  createDoctor(doctorForm: NgForm) {
    if (doctorForm.valid) {
      this.newDoctor.doctorName = this.newDoctor.doctorName;
      this.newDoctor.doctorSpecialization = this.newDoctor.doctorSpecialization;
      this.newDoctor.doctorLocation = this.newDoctor.doctorLocation;
      this.newDoctor.doctorRating = this.newDoctor.doctorRating;

      this.service.addDoctor(this.newDoctor).subscribe(data => {
        console.log(data);
        alert("Doctor Added");
        doctorForm.resetForm();
        window.location.reload();
      });
    }
  }

  EditDoctor(doctor: Doctor, doctorIndex: number) {
    
    doctor.doctorName = doctor.doctorName;
    doctor.doctorSpecialization = doctor.doctorSpecialization
    doctor.doctorLocation = doctor.doctorLocation
  
    this.service.updateDoctor(doctor.doctorId, doctor).subscribe(data => {
      console.log(data);
      alert("Doctor updated");
    });
  
    
    this.isEditing[doctorIndex] = false;
    window.location.reload();
  }
  


  deleteDoctor(index: number) {
    const deletedDoctor = this.doctors[index];
  
    this.service.deleteDoctor(deletedDoctor.doctorId).subscribe(() => {
      console.log("Doctor deleted");
      this.doctors.splice(index, 1);
      window.location.reload();
    });
  }
  
}
