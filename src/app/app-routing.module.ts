import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { TeacherMainMenuComponent } from './teacher-main-menu/teacher-main-menu.component';
import { TeacherDashBoardComponent } from './teacher-dash-board/teacher-dash-board.component';


const routes: Routes = [
  { path: '', component: UserRegistrationComponent },
    { path: 'TeacherDashBoard', component: TeacherDashBoardComponent },
    { path: 'Catalogue', component: CatalogueComponent },
    { path: 'BroadBand-Orderentry', component: TeacherMainMenuComponent },
    
  
    {
      path: '**',
      redirectTo: ''
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

