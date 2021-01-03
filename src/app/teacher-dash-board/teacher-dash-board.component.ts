import { Component, OnInit } from '@angular/core';
import { AlertService } from '../Shared_Services/alert.service';
import { ConfirmService } from '../Shared_Services/confirm.service';
import { questions } from '../user-registration/registrationModel';
import * as bootstrap from "bootstrap";
// import * as $ from "jquery";
declare var $ :any;

@Component({
  selector: 'app-teacher-dash-board',
  templateUrl: './teacher-dash-board.component.html',
  styleUrls: ['./teacher-dash-board.component.css']
})
export class TeacherDashBoardComponent implements OnInit {
   step:number = 1;
   PreviewFlag:boolean=true;
   Question_Bucket:any[]=[];
  constructor(private confirmService:ConfirmService,
              private alertService:AlertService ) { }
  questions:questions;
  ngOnInit() {
    this.questions=new questions;
  }
  Add(form:any){
    let that = this;
    const request_input=form.form.value;
    if(request_input.problem&&request_input.option1&&request_input.option2&&request_input.option3&&request_input.option4){
       const obj={
        problem:request_input.problem,
        option1:request_input.option1,
        option2:request_input.option2,
        option3:request_input.option3,
        option4:request_input.option4,
        answer:'null'
       }
      this.confirmService.confirm('Are you sure?',  function () {
        that.dummy(obj);
        console.log('request_input',request_input);
        form.reset();
       }, function () {
    });
  
}
else{
  
  that.alertService.alertThis('Please enter all the details', 'W', function () { });
  console.log('request_input',request_input)
}

  }
  clearForm(form:any){
    form.reset();
  }

  setStep(index: number) {
    this.step = index;
  }
  dummy(x){
    
    this.Question_Bucket.push(x);
    this.PreviewFlag=false;
    
  }
  Preview(){

  }
  Submit(){
    console.log('submittedans',this.Question_Bucket);
    const proceedFlag=this.Question_Bucket.filter((iteam:any)=>iteam.answer==='null')
    console.log('proceedFlag',proceedFlag)
    if(proceedFlag.length===0){
      // $("#preview_Modal").modal("hide");
      ($('#preview_Modal') as any).modal('hide');
    }
    else{
      alert("Please select answers for all the questions");
    }
    // alert("Hello\nHow are you?");
  //   this.confirmService.confirm('Are you sure?',  function () {
     
  //    }, function () {
  // });

  }
}
