import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  constructor(private httpClient: HttpClient) { }

  public getStudents(classroomId){
    //return this.httpClient.get(`http://localhost:4200/api`).
    return this.httpClient.get('https://bloomapi-3e845.firebaseapp.com/progress/classroom/'+classroomId+'/students').
    pipe(map(result => result));
  }

  public getStudent(cycleId,studentId){
    //return this.httpClient.get('https://bloomapi-3e845.firebaseapp.com/progress/cycles/'+cycleId+'/students/'+studentId).
    return this.httpClient.get(`http://localhost:4200/api`).
    pipe(map(result => result));
  }
}
