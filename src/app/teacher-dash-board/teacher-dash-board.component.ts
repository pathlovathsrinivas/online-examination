import { Component, OnInit } from '@angular/core';
import { AlertService } from '../Shared_Services/alert.service';
import { ConfirmService } from '../Shared_Services/confirm.service';
import { questions } from '../user-registration/registrationModel'

@Component({
  selector: 'app-teacher-dash-board',
  templateUrl: './teacher-dash-board.component.html',
  styleUrls: ['./teacher-dash-board.component.css']
})
export class TeacherDashBoardComponent implements OnInit {
   step:number = 1;
   Question_Bucket:any=[];
  constructor(private confirmService:ConfirmService,
              private alertService:AlertService ) { }
  questions:questions
  ngOnInit() {
    this.questions=new questions;
  }
  Submit(form:any){
    const request_input=form.form.value
    if(request_input.problem&&request_input.option1&&request_input.option2&&request_input.option3&&request_input.option4){
       
      this.confirmService.confirm('Are you sure?',  function () {
        this.dummy(request_input);
        console.log('request_input',request_input)
        form.reset();
       }, function () {
    });

}
else{
  this.alertService.alertThis('Please enter all the details', 'W', function () { });
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
    
  }
}
