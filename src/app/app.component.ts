import { Component , OnInit, AfterViewChecked} from '@angular/core';
import { from } from 'rxjs';
import { NavBarComponent} from '../app/nav-bar/nav-bar.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewChecked {

  title = 'lifeison';
  functionalMenuList:any[]=[];

  ngAfterViewChecked(): void {
    // throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this.displayfun();
    // throw new Error('Method not implemented.');
  }
  displayfun(){
    this.functionalMenuList=["Home","Product","Solution","Service","Support","Contact US","hi all"];
  }

}
