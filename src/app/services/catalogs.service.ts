import { Injectable } from '@angular/core';
import { Catalog } from 'src/app/models/catalog.interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CatalogsService {
  constructor(private http: HttpClient) {}

  private API_URL = environment.API_URL + '/catalogs';

  // GET /catalogs/:type
    public getCatalogsByType(type: string): Observable<Catalog[]> {
        return this.http.get(this.API_URL + '/' + type) as Observable<Catalog[]>;
    }
}
