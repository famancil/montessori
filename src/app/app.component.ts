import { Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'montessori';
  public isHome: boolean= false;
  public isAttendance: boolean= false;
  public isProgress: boolean= false;
  public isPlanning: boolean= false;
  public isReports: boolean= false;
  public isActivity: boolean= false;

  constructor(private location: Location) {
	if(location.path() == "") this.isHome=true;
	if(location.path() == "/attendance") this.isAttendance=true;
	if(location.path() == "/progress") this.isProgress=true;
	if(location.path() == "/planning") this.isPlanning=true;
	if(location.path() == "/reports") this.isReports=true;
	if(location.path() == "/activity") this.isActivity=true;
  }

  
}
