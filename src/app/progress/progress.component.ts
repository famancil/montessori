import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProgressService } from '../progress.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  public href: string = "";
  students;
  name: string;
  modalContent: {name: any};
  modalContentStudent: {name: any, activity:any, index: any,indexStudent:any};
  modalReference: any;
  radioAct: boolean;
  radioSelected:string;
  activities:any[] = [];
  selectedIndex: any[][];
  selectedCheckIndex: any[][];
  selectedInteraction: any[];
  
  status = ['/', 'x', '*'];
  currentStatus:string; 
  
  photoForm;
  commentForm;
  fileToUpload: File = null;
  fecha = Date.now();

  isActive;
  activeClass;
  
  constructor(private modalService: NgbModal, private router: Router, private progressService: ProgressService,
    private formBuilder: FormBuilder) {
    this.photoForm = this.formBuilder.group({
      photo: '',
      comment: ''
    });
    this.commentForm = this.formBuilder.group({
      comment: ''
    });
  }

  open(content,name) {
  	this.modalContent = {name: name};
    //this.modalContent = {name: name, name: 'Jug to jug: Beans', name: 'Jug to jug: Water'};
    this.modalReference = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  openComment(contenido,name) {
  	//console.log(name)
    this.modalContent = {name: name};
    this.modalReference = this.modalService.open(contenido, {ariaLabelledBy: 'modal-basic-title'});
   
  }

  openStudent(contentStudent,name,activity,status,index,indexStudent) {
    if(status == 1) this.currentStatus = '/';
    else if(status == 2) this.currentStatus = 'x';
    else this.currentStatus = '*';
    //this.modalContentStudent = {name: name, activity: activity, index: index, indexStudent:indexStudent};
    this.modalContentStudent = {name: name, activity: this.activities, index: index, indexStudent:indexStudent};
    this.modalService.open(contentStudent, {ariaLabelledBy: 'modal-basic-title', size: 'lg'});
  }

  onItemChange(stat,index,indexStudent){
    console.log(stat);
    console.log(index);
    this.currentStatus = stat;
    if(stat == '/') this.students[indexStudent].progress[index].statusid = 1
    if(stat == 'x') this.students[indexStudent].progress[index].statusid = 2
    if(stat == '*') this.students[indexStudent].progress[index].statusid = 3
  }

  ngOnInit() {
    this.isActive=false;
  	this.href = this.router.url;
  	console.log(this.href);

    this.activities.push({id:1, activity: 'Jug to jug: Beans'})
    this.activities.push({id:2, activity: 'Pink tower'})
    this.activities.push({id:3, activity: 'Initial sounds'})
    this.activities.push({id:4, activity: 'Counting 1 - 5'})
    this.activities.push({id:5, activity: 'Samples'})
    this.activities.push({id:6, activity: 'Colour box I pair'})
    /*this.activities.push({id:7, activity: 'Spooning: x2'})
    this.activities.push({id:8, activity: 'Sponging'})
    this.activities.push({id:9, activity: 'Baster'})
    this.activities.push({id:10, activity: 'Pipette'})
    this.activities.push({id:11, activity: 'Funnel'})
    this.activities.push({id:12, activity: 'Whisk'})
    this.activities.push({id:13, activity: 'Tongs'})
    this.activities.push({id:14, activity: 'Tweezers'})
    this.activities.push({id:15, activity: 'Grinding'})
    this.activities.push({id:16, activity: 'Sifting'})
    this.activities.push({id:17, activity: 'Small beads'})
    this.activities.push({id:18, activity: 'Large beads'})
    this.activities.push({id:19, activity: 'Key hanging'})
    this.activities.push({id:20, activity: 'Jars'})
    this.activities.push({id:21, activity: 'Safety pins'})
    this.activities.push({id:22, activity: 'Boxes'})
    this.activities.push({id:23, activity: 'Nuts & bolts'})
    this.activities.push({id:24, activity: 'Screw driver'})
    this.activities.push({id:25, activity: 'Locks & Keys'})
    this.activities.push({id:26, activity: 'Touch boards'})
    this.activities.push({id:27, activity: 'Touch tablets'})
    this.activities.push({id:28, activity: 'Touch fabrics'})
    this.activities.push({id:29, activity: 'Mystery bags'})
    this.activities.push({id:30, activity: 'Stereognostic/sorting'})
    this.activities.push({id:31, activity: 'Pairing'})
    this.activities.push({id:32, activity: 'Sound cylinders'})
    this.activities.push({id:33, activity: 'Smelling bottles'})
    this.activities.push({id:34, activity: 'Thermic tablets'})
    this.activities.push({id:35, activity: 'Tasting bottles'})
    this.activities.push({id:36, activity: 'Baric tablets'})
    this.activities.push({id:37, activity: 'Carrying a chair'})
    this.activities.push({id:38, activity: 'Rolling a mat'})
    this.activities.push({id:39, activity: 'Carrying a tray'})
    this.activities.push({id:40, activity: 'Walking on the line'})
    this.activities.push({id:41, activity: 'Obstacle course'})
    this.activities.push({id:42, activity: 'Jumping'})
    this.activities.push({id:43, activity: 'Hopping'})
    this.activities.push({id:44, activity: 'Skipping'})
    this.activities.push({id:45, activity: 'Catching a ball'})
    this.activities.push({id:46, activity: 'Napking folding'})
    this.activities.push({id:47, activity: 'Whisk'})
    this.activities.push({id:48, activity: 'Scrubbing chairs'})
    this.activities.push({id:49, activity: 'Tablets'})*/

    this.selectedIndex = [];
    for(var i=0 ; i<49; i++){
      this.selectedIndex[i]=[];
      this.selectedIndex[i].push(false)
      this.selectedIndex[i].push(false)
      this.selectedIndex[i].push(false)
    }

    this.selectedCheckIndex=[];
    for(var i=0 ; i<49; i++){
      this.selectedCheckIndex[i]=[];
      this.selectedCheckIndex[i].push(false)
      this.selectedCheckIndex[i].push(false)
      //this.selectedCheckIndex.push(false)
    }

    this.selectedInteraction=[];
    for(var i=0 ; i<49; i++){
      this.selectedInteraction.push(false)
      //this.selectedCheckIndex.push(false)
    }
    

    this.progressService.getStudents(1).subscribe((data: any[])=>{

      length =  Object.keys(data).length;

      for (let i = 0; i < data.length; i++) {

        data[i].progress.sort((a: any, b: any) => {
          if (!a.activityabb.localeCompare(b.activityabb)) 
          {
            return a.type > b.type;
          }
          return a.activityabb.localeCompare(b.activityabb);
        });
      }
      this.students = data;
    });

  }

  handleFileInput(files: FileList) {
    this.photoForm.photo = files.item(0);
  }

  onPhotoSubmit(photoData) {
    photoData.photo = this.photoForm.photo;
    console.log('Your photo has been submitted..', photoData);
    this.photoForm.reset();
    this.photoForm.photo = '';
    this.modalReference.close();
  }

  onCommentSubmit(commentData) {
    console.log('Your comment has been submitted..', commentData);
    this.commentForm.reset();
    this.modalReference.close();
  }

  OnClick(x,y){
    console.log(this.selectedIndex[x][y])
    
    if (this.selectedIndex[x][y] == true) this.selectedIndex[x][y] = false;
    else this.selectedIndex[x][y] = true;

    if(y===0){
      this.selectedIndex[x][1] = false;
      this.selectedIndex[x][2] = false;
    }
    else if(y===1){
      this.selectedIndex[x][0] = false;
      this.selectedIndex[x][2] = false;
    }
    else {
      this.selectedIndex[x][0] = false;
      this.selectedIndex[x][1] = false;
    }
    // send activity "x" con el idUsuario que puede estar en "selectedLavender",
    // "selectedTrillium" y "selectedTesting". Y classroom "selectedClassroom"
  }

  OnClickCheck(x,y){    
    if (this.selectedCheckIndex[x][y] == true) 
      this.selectedCheckIndex[x][y] = false;
    else this.selectedCheckIndex[x][y] = true;

    if(y===0){
      this.selectedCheckIndex[x][1] = false;
    }
    else if(y===1){
      this.selectedCheckIndex[x][0] = false;
    }
  }

  NextActivity(act,student){
    console.log(act)
    console.log(student)
  }

  OnClickChange(index) {
    this.selectedInteraction[index] = !this.selectedInteraction[index]
  }

}
