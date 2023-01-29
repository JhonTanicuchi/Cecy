import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Enrollment } from 'src/app/models/enrollment.interface';

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
}

