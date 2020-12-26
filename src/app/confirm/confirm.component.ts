import { Component, OnInit } from '@angular/core';
import { ConfirmService } from '../Shared_Services/confirm.service'

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  message: any;

  constructor(private confirmService:ConfirmService) { }

  ngOnInit() {
    this.confirmService.getMessage().subscribe(message=>{
      this.message=message;
      console.log('message',this.message)
    })
  }

}
