import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from './interface/IMovie';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getAllMovies$(): Observable<IMovie[]> {
    return this.httpClient.get<IMovie[]>("http://localhost:8080/movies/all");
  }

}
