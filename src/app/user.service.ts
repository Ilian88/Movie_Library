import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from './interface/iuser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersURL: string = 'http://localhost:8080/users';

  constructor(private http: HttpClient) { }

  //to implement on back end
  getAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.usersURL + '/all')
  }

  register(user : IUser) {
    return this.http.post(this.usersURL + '/register',user)
  }

  login(user: IUser) {
    return this.http.post(this.usersURL + '/login',user)
  }
  

}


