import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Incident } from './incident.interface';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class IncidentDataService {
  private incidentsUrl = 'api/incidents';

  constructor(private http: HttpClient) { }

  getData(): Observable<Incident[]> {
    return this.http.get<Incident[]>(this.incidentsUrl);
  }

  deleteIncident(incident: Incident): Observable<Incident> {
    return this.http.delete<Incident>(`${this.incidentsUrl}/${incident.id}`, httpOptions);
  }

}