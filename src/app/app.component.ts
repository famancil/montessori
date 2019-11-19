import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bloom-front-end';
  public isHome: boolean= false;
  public isAttendance: boolean= false;
  public isProgress: boolean= false;
  public isPlanning: boolean= false;
  public isReports: boolean= false;
  public isActivity: boolean= false;

  constructor(private location: Location) {
	if(location.path() == "") this.isHome=true;
  if(location.path().indexOf("/attendance") > -1) this.isAttendance=true;
  if(location.path().indexOf("/progress") > -1) this.isProgress=true;
  if(location.path().indexOf("/planning") > -1) this.isPlanning=true;
  if(location.path().indexOf("/reports") > -1) this.isReports=true;
  if(location.path().indexOf("/activity") > -1) this.isActivity=true;
	/*if(location.path() == "/planning") this.isPlanning=true;
	if(location.path() == "/reports") this.isReports=true;
	if(location.path() == "/activity") this.isActivity=true;*/
  }  
}
