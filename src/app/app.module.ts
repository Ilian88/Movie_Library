import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './features/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './features/main/main.component';
import { FooterComponent } from './features/footer/footer.component';
import { LoginComponent } from './authorization/login/login.component';
import {MatCardModule} from '@angular/material/card'; 
import { FormsModule, ReactiveFormsModule,FormGroup } from '@angular/forms';
import { RegisterComponent } from './authorization/register/register.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { SingleMovieComponent } from './features/main/single-movie/single-movie.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FeaturesComponent,
    HomeComponent,
    MainComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    SingleMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
