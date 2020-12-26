import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { from } from 'rxjs';
import { FormControl } from '@angular/forms';
import {StudentRegistrationModel ,StudentLogin,teacherRegistrationModel,TeacherLogin} from './registrationModel'

declare var $: any;

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  constructor() { }
  
  studentRegistrationModel:StudentRegistrationModel;
  Student_Login:StudentLogin;
  TeacherRegistrationModel:teacherRegistrationModel;
  Teacher_Login:TeacherLogin;
  StanderdLov:any[]=[];
  ngOnInit() {
    this.studentRegistrationModel=new StudentRegistrationModel;
    this.Student_Login=new StudentLogin;
    this.TeacherRegistrationModel=new teacherRegistrationModel;
    this.Teacher_Login=new TeacherLogin;
   
  
   
  }

  StudentRegistration(){
 console.log('S_register',this.studentRegistrationModel)
  }
  clearForm(form:any){
    form.reset();
  }
  StudentLogin(){
console.log('s_login',this.Student_Login);
  }
  TeacherRegistration(){

  }
  TeacherLogin(){
    
  }
}
