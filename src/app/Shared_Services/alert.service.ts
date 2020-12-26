import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/filter';


@Injectable()
export class AlertService {

  private subject = new Subject<any>();

  constructor() { }

  alertThis(message: string, flag: string, siFn: () => void) {
      this.setAlert(message, flag, siFn);
  }

  setAlert(message: string, flag: string, siFn: () => void) {
      let that = this;
      this.subject.next({
          type: 'Alert',
          text: message,
          status: flag,
          siFn: function () {
              that.subject.next();
              siFn();
          }
      });
  }

  getMessage(): Observable<any> {
      return this.subject.asObservable();
  }
}
