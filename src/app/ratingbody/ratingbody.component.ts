import { Rating } from './../domain/Rating';
import { Appointment } from './../domain/Appointment';
import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { RatingRequest } from '../domain/RatingRequest';
// import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ratingbody',
  templateUrl: './ratingbody.component.html',
  styleUrls: ['./ratingbody.component.css']
})
export class RatingbodyComponent {
  // title = 'ng-bootstrap-modal-demo';
  // closeResult: string;
  // modalOptions:NgbModalOptions;

  appointments: any;
  userId: number=0;
  doctorName: string='';
  appointment:Appointment = new Appointment();
  searchDoctorName: string;
  ratings:any;
  rating:Rating = new Rating();
  ratingrequest:RatingRequest = new RatingRequest();


  constructor(private service: ServiceService) {
    // this.modalOptions = {
    //   backdrop:'static',
    //   backdropClass:'customBackdrop'
    // }
   }

  ngOnInit(): void {

    this.service.getAppointmentByUserId(this.userId).subscribe(response => {
      console.log("1");
      this.appointments = response;
    });
  }

  // open(content:any) {
  //   this.modalService.open(content, this.modalOptions).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return  `with: ${reason}`;
  //   }
  // }

  searchDoctors() {
    this.service.getAppointmentByDoctorName(this.searchDoctorName).subscribe(response => {
      this.appointments = response;
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

  submitRating(appointment: any,rating: any,review:any) {
    // Access the rating value and review text from the rating object
    

    this.ratingrequest = new RatingRequest();

    this.ratingrequest.rating= Number(rating);
    this.ratingrequest.review= review;
    this.ratingrequest.appointmentId = appointment.appointmentId;

    console.log(this.ratingrequest);
    
    this.service.addRating(this.ratingrequest)
    .subscribe(
      response => {
        // Handle the API response
        console.log('Rating added Succesfully!');
      },
      error => {
        console.error('Failed to add rating:', error);
      }
    );

    // this.rating = new Rating();

    // this.rating.rating = ratingValue;
    // this.rating.review = reviewText;

    // this.rating.appointmentId=this.appointment.appointmentId;
    // this.rating.appointmentDate=this.appointment.appointmentDate;
    // this.rating.appointmentTime=this.appointment.appointmentTime;
    
    // this.rating.doctorId = this.appointment.doctorId;
    // this.rating.doctorName = this.appointment.doctorName;

    // Perform further actions with the rating and review values
  }

}
