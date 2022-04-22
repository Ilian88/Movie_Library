import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './authorization/register/register.component';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { MainComponent } from './features/main/main.component';

const routes: Routes = [
  { path: '', component : HomeComponent },
  { path: 'register', component : RegisterComponent },
  { path: 'login', component: LoginComponent},
  { path: 'main' , component: MainComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
