import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminbodyComponent } from './adminbody/adminbody.component';
import { AdminhomrComponent } from './adminhomr/adminhomr.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RatingComponent } from './rating/rating.component';
import { RatingbodyComponent } from './ratingbody/ratingbody.component';
import { RatingdialogComponent } from './ratingdialog/ratingdialog.component';
import { RegisterComponent } from './register/register.component';
import { ServicesComponent } from './services/services.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserbodyComponent } from './userbody/userbody.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbaradminComponent } from './navbaradmin/navbaradmin.component';
import { SidebaradminComponent } from './sidebaradmin/sidebaradmin.component';
import { RatereviwComponent } from './ratereviw/ratereviw.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    AdminbodyComponent,
    AdminhomrComponent,
    LandingComponent,
    LoginComponent,
    NavbarComponent,
    RatingComponent,
    RatingbodyComponent,
    RatingdialogComponent,
    RegisterComponent,
    ServicesComponent,
    SidebarComponent,
    UserbodyComponent,
    UserhomeComponent,
    NavbaradminComponent,
    SidebaradminComponent,
    RatereviwComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
