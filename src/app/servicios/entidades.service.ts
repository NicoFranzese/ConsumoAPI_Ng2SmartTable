import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntidadesService {

  constructor(private http: HttpClient) { }

  public traerEntidad(e): Observable<Response> {
    return this.http.get<Response>(
      `https://awovcw7p76.execute-api.us-east-1.amazonaws.com/dev/entity/v2.1/entities/` + e);
  }
}
