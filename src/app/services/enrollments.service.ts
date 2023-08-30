import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Enrollment } from 'src/app/models/enrollment.interface';
import { Param } from 'src/app/models/param.interface';

@Injectable({
  providedIn: 'root',
})
export class EnrollmentService {
  constructor(private http: HttpClient) {}
  private url = environment.API_URL + '/enrollments';

  // GET /enrollments
  public getEnrollments(): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(this.url);
  }
  //GET /enrollments/search/term/{term}
  public getEnrollmentsByTerm(term: string): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(this.url + '/search/term/' + term);
  }

  // GET /enrollments/type/{type}
  public getEnrollmentsByType(type: string): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(this.url + '/type/' + type);
  }

  // POST /enrollments/filter
  public getEnrollmentsByParams(params: Param[]): Observable<any[]> {
    return this.http.post<any[]>(this.url + '/filter', params);
  }
}
