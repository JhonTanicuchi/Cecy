import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable , of} from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root',
})
export class TokenService {

    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    private url = environment.API_URL + '/auth/login';

    constructor(private http: HttpClient) { }

    getAccessToken(): Observable<any> {
        return this.http.post<any>(this.url, {
            email: 'superadmin@fdje.com',
            password: 'password',
        }, this.httpOptions).pipe(
            map((response) => {
                return response;
            })
        );
    }
}
