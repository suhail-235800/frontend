import { Time } from "@angular/common";

export class Appointment{

    appointmentId: number;
    appointmentDate: Date;
    appointmentTime: Date;
    
    doctorId:number;
    doctorName:string;
    doctorSpecialization:string;
    doctorLocation:string;
    
    userId:number=0;
    
    constructor(){

        this.doctorId=0;
        this.doctorName='';
        this.doctorSpecialization='';
        this.doctorLocation='';
        
        this.appointmentId=0;
        this.appointmentDate=new Date();
        this.appointmentTime=new Date();

        this.userId=0;
    
    }

}