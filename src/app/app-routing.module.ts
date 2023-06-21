
import { AdminhomrComponent } from './adminhomr/adminhomr.component';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RatingComponent } from './rating/rating.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserhomeComponent } from './userhome/userhome.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path:'',redirectTo:'/landing',pathMatch:'full'},
  { path: 'userhome', component: UserhomeComponent },
  { path: 'rating', component: RatingComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'adminhome', component: AdminhomrComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
