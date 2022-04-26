import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './authorization/register/register.component';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './authorization/login/login.component';
import { MainComponent } from './features/main/main.component';
import { SingleMovieComponent } from './features/main/single-movie/single-movie.component';

const routes: Routes = [
  { path: '', component : HomeComponent },
  { path: 'register', component : RegisterComponent, pathMatch : 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'main' , component: MainComponent},
  { path: 'single-movie', component: SingleMovieComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
