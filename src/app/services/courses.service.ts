import { Injectable } from '@angular/core';
import { Course } from 'src/app/models/course.interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private API_URL = environment.API_URL + '/courses';

  // GET /courses
  public getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.API_URL);
  }
}
