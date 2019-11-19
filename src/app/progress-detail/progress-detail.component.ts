import { Component, OnInit } from '@angular/core';
import { Router  , ActivatedRoute } from '@angular/router';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';
import { ProgressService } from '../progress.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-progress-detail',
  templateUrl: './progress-detail.component.html',
  styleUrls: ['./progress-detail.component.css']
})
export class ProgressDetailComponent implements OnInit {
  //  public selectedIndex = null;
  public currentButton = null;
  public index = 0;
  public isClicked = [];
  selectedIndex: any[][];
  selectedClassroom: any;
  selectedLavender: any;
  selectedTrillium: any;
  selectedTesting: any;
  tablist = false;

  areas = [['Practical Life',['Physical','PSE']],'Sensorial',
  ['Language',['Beginner','Advanced']],'Mathematics','Culture','Art'];
  selectedArea = this.areas[0][0];
  selectedSubArea = this.areas[0][1][0];

  Classrooms = ['Lavender','Trillium','For Testing'];


  trilliumClass = [
    { id : '7', value : 'Alliana' },
    { id : '4', value : 'Aria' },
    { id : '21', value : 'Avery' },
    { id : '8', value : 'Beckett Henry' },
    { id : '1', value : 'Callum' },
    { id : '22', value : 'Campbell French' },
    { id : '23', value : 'Elvina Jaff' },
    { id : '24', value : 'Ever Stewart' },
    { id : '14', value : 'Hana' },
    { id : '25', value : 'Harley Renton' },
    { id : '26', value : 'Hudson Hoogerdyk' },
    { id : '27', value : 'Isabella Halgren' },
    { id : '15', value : 'Jack' },
    { id : '28', value : 'Jesus Lazo' },
    { id : '29', value : 'Kahpri Babini' },
    { id : '30', value : 'Kingston Abellan' },
    { id : '17', value : 'Koen' },
    { id : '31', value : 'Konrad Aiyadurai' },
    { id : '32', value : 'Londyn' },
    { id : '19', value : 'Lucas Inskster' },
    { id : '20', value : 'Lukasz' },
    { id : '18', value : 'Milo Stewart' },
    { id : '33', value : 'Noah Craig' },
    { id : '34', value : 'Remy Marks' },
    { id : '35', value : 'Skye Hoadley' }
    ];

    lavenderClass = [
    { id : '36', value : 'Aimee Louis' },
    { id : '37', value : 'Antonia' },
    { id : '38', value : 'Ashton' },
    { id : '39', value : 'August Lubberts' },
    { id : '40', value : 'Avalyn Mickelson' },
    { id : '41', value : 'Brayden Pescod' },
    { id : '42', value : 'Brooklyn Mathews' },
    { id : '43', value : 'Clark Dennill' },
    { id : '44', value : 'Declan Hovey' },
    { id : '45', value : 'Ella Zapella' },
    { id : '46', value : 'Evie Rico' },
    { id : '47', value : 'Griffin' },
    { id : '48', value : 'Hudson Partridge' },
    { id : '49', value : 'James Jones' },
    { id : '50', value : 'Jaxon Montgomery' },
    { id : '51', value : 'Jessica' },
    { id : '52', value : 'Keenan Coxon' },
    { id : '53', value : 'Kelela Groulx' },
    { id : '54', value : 'Kingsley Martens' },
    { id : '55', value : 'Lizzy' },
    { id : '56', value : 'Manya Bhalla' },
    { id : '57', value : 'Masha Orekhova' },
    { id : '58', value : 'Midori Kinnear' },
    { id : '59', value : 'Mirabai' },
    { id : '60', value : 'Norah Bones' },
    { id : '61', value : 'Odin Oxley' },
    { id : '62', value : 'Sierra' },
    { id : '63', value : 'Suhanna Bunger' },
    { id : '64', value : 'Vihiar' },
    { id : '65', value : 'Vivienne Paul' },
    { id : '66', value : 'Zahara Stewart-Ossa' },
    ];

    testingClass = [
    { id : '1000', value : 'Developer1' },
    { id : '1001', value : 'Developer2' },
    ];

  /*defaultBindingsList: any[];
  inProgressTable: any[];

  checkPreA: any[];
  checkPreB: any[];
  checkPreC: any[];
  checkPre: any[];

  checkCheA: any[];
  checkCheB: any[];
  checkCheC: any[];
  checkChe: any[];

  student=null;  

  selectedActivity = null;*/

  //constructor(private progressService: ProgressService, private route: ActivatedRoute) { }
  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {

    this.selectedIndex = [];
    for(var i=0 ; i<387; i++){
      this.selectedIndex[i]=[];
      this.selectedIndex[i].push(false)
      this.selectedIndex[i].push(false)
      this.selectedIndex[i].push(false)
    }
  }

  showSpinner(name: string) {
    this.spinner.show(name); 
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide(name);
    }, 5000);
  }

  OnClick(x,y){
    console.log(this.selectedIndex[x][y])
    if(this.selectedLavender) console.log(this.selectedLavender)
    else if(this.selectedTrillium) console.log(this.selectedTrillium)
    else if(this.selectedTesting) console.log(this.selectedTesting)
    
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

  onChange(newValue) {
    console.log(newValue);
    this.selectedClassroom = newValue;
    // ... do other stuff here ...
  }

  onChangeStudent(newValue) {
    console.log(newValue);
    this.showSpinner('sp6');
    this.tablist=true;
    //this.selectedClassroom = newValue;
    // ... do other stuff here ...
  }

  /*addSelect(selectedActivity) {
    for(let x=0;x<this.inProgressTable.length;x++){
      if (this.inProgressTable[x].label==selectedActivity.label)
      {
        alert("That's activity is already in the table In Progress");
        return;
      }        
    }
    this.inProgressTable.push({value: selectedActivity.label, label:selectedActivity.label
      ,checkA:false,checkB:false,checkC:false});
  }

  borrarRow(rowActivity) {
    for(let x=0;x<this.inProgressTable.length;x++){
      if (this.inProgressTable[x].label==rowActivity)
      {
        this.inProgressTable.splice(x,1);
        return;
      }
    }
  }

  borrarPre(activityabb,status,type) {
    for(let x=0;x<this.student.progress.length;x++){
      if (this.student.progress[x].activityabb==activityabb && 
      this.student.progress[x].statusid == status && 
      this.student.progress[x].type == type )
      { 
        this.checkPre[0].splice(x,1);
        this.checkPre[1].splice(x,1);
        this.checkPre[2].splice(x,1);
        this.student.progress.splice(x,1);
        this.student.progress.splice(x,1);
        //Debo arreglar esto sobre borrar la actividad de presentacion y check.
        return;
      }
    }
  }

  borrarCheck(rowActivity) {
    for(let x=0;x<this.inProgressTable.length;x++){
      if (this.inProgressTable[x].label==rowActivity)
      {
        this.inProgressTable.splice(x,1);
        return;
      }
    }
  }*/

}
