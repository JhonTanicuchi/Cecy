import { Injectable } from '@angular/core';
import { Career } from 'src/app/models/career.interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CareersService {
  constructor(private http: HttpClient) {}

  private API_URL = environment.API_URL + '/careers';

  // GET /careers
  public getCareers(): Observable<Career[]> {
    return this.http.get<Career[]>(this.API_URL);
  }
}
