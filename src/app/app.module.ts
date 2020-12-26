import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatDialogModule, MatButtonModule, MatFormFieldModule } from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import { MaterialModule } from './shared/material/material.module';
import { TeacherMainMenuComponent } from './teacher-main-menu/teacher-main-menu.component';
import { TeacherDashBoardComponent } from './teacher-dash-board/teacher-dash-board.component';
import { AlertComponent } from './alert/alert.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ConfirmService } from './Shared_Services/confirm.service';
import {AlertService} from './Shared_Services/alert.service' ;

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CatalogueComponent,
    UserRegistrationComponent,
    TeacherDashBoardComponent,
    TeacherMainMenuComponent,
    AlertComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,FormsModule,MatFormFieldModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule, MatButtonModule,MatExpansionModule
  ],
  providers: [ConfirmService,AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
