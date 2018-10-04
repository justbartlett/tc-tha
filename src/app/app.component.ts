import { Component, OnInit } from '@angular/core';
import { IncidentDataService } from './incident-data.service';
import { Incident } from './incident.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public incidents: Incident[];
  
  private deleteIncident: Incident;

  constructor(private incidentDataService: IncidentDataService) { }

  ngOnInit() {
    this.getIncidentData();
  }

  getIncidentData(): void {
    this.incidentDataService.getData()
    .subscribe(incidents => this.incidents = incidents);
  }

  delete(incident: Incident): void {
    this.incidents = this.incidents.filter(keepIncident => keepIncident !== incident);
    this.deleteIncident = incident;
    this.incidentDataService.deleteIncident(incident).subscribe();
  }

}